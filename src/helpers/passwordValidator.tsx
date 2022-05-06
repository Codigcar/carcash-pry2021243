export function passwordValidator(password: string) {
    if (!password) return "La contraseña no puede estar vacía"
    if (password.length < 3) return 'La contraseña debe tener al menos 3 caracteres'
    return ''
}