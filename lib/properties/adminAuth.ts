export function isAdminPropertyRequest(request:Request){const expected=process.env.PROPERTY_ADMIN_TOKEN;return Boolean(expected&&request.headers.get("x-property-admin-token")===expected)}
