import tippy from 'tippy.js';
const superUser = "SUPER ADMIN"

export const permission = {
    mounted(el, binding) {
        if (!binding.value) {
            return 
        }
        const permissions = binding.value.permissions;
        const documentation = binding.value.documentation;
        const showAll = binding.value.showAll ?? false;
        
        const hasPermission = checkUserPermission(permissions);
        if (!hasPermission) {
            el.remove()
        } else if (permissions.includes('admin') || showAll) {
            showTooltip(el, permissions, documentation)
        }
    },
};

// Funciones para mostrar y ocultar el tooltip
function showTooltip(el, permissions, documentation) {
    tippy(el, {
        content: `<div>
                <div class="tooltip-documentation">
                    <div>Documentación: ${documentation}</div>
                </div>
                <hr>
                <div>Permisos asociados: ${permissions.map(per => per)}</div>
        </div`,
        allowHTML: true,
        // interactive: true,
        placement: 'top-end',
    });
}

// Simula una función para verificar si el usuario tiene el permiso
function checkUserPermission(requiredPermissions) {
    let user = JSON.parse(window.localStorage.getItem('user'));
    const userPermissions = user.permissions
    const userRoles = user.roles;
    if (userRoles.includes(superUser)) {
        return true
    }
    return requiredPermissions.some(permission => userPermissions.includes(permission));
}

