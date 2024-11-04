export function auth() {
    return {
        headers: {
            Authorization: `Token ${localStorage.token}`,
        },
    }
}

let permissions: string[] | undefined

export function checkPermission(permission: string) {
    if (permissions === undefined) {
        permissions = JSON.parse(localStorage.getItem("permissions") || "[]") as string[]
    }

    return permissions.includes(permission)
}

export function clearPermissions() {
    permissions = undefined
}

// export function login({ user, token, permissions: userPermissions }: LoginType, navigate: NavigateFunction) {
//     localStorage.setItem("user", JSON.stringify(user))
//     localStorage.setItem("token", token)
//     localStorage.setItem("permissions", JSON.stringify(userPermissions))
//     navigate("/settings")
// }

// export function logout(navigate: NavigateFunction, invalidate: () => void) {
//     localStorage.removeItem("user")
//     localStorage.removeItem("token")
//     localStorage.removeItem("permissions")
//     clearPermissions()
//     navigate("/")
//     invalidate()
// }

// export function isAuthenticated() {
//     return localStorage.getItem("user") && localStorage.getItem("token") && localStorage.getItem("permissions")
// }
