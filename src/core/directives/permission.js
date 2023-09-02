import tippy from 'tippy.js';


export const permission = {
    mounted(el, binding) {
        const permissions = binding.value.permissions;
        const documentation = binding.value.documentation;
        const hasPermission = checkUserPermission(permissions);
        if (!hasPermission) {
            el.remove()
        } else if (permissions.includes('admin')) {
            showTooltip(el, permissions, documentation)
        }
    },
};

// Funciones para mostrar y ocultar el tooltip
function showTooltip(el, permissions, documentation) {
    console.log(el.id);
    tippy(`#${el.id}`, {
        content: `<div>
                <div class="tooltip-documentation">
                    <div>Documentación: ${documentation}</div>
                </div>
                <hr>
                <div>Permisos asociados: ${permissions.map(per => per)}</div>
        </div`,
        allowHTML: true,
        interactive: true,
        placement: 'top-end',
    });
}

// Simula una función para verificar si el usuario tiene el permiso
function checkUserPermission(requiredPermissions) {
    const userPermissions = ['admin', 'user', 'editor', 'test_permission']; // Ejemplo de permisos del usuario
    return requiredPermissions.some(permission => userPermissions.includes(permission));
}

// Resto del código...
