const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function membersModal() {

let membersModalLoaded = false;
let membersModalLoading = false;

async function openMembersModal() {
    const host = document.getElementById('membersModalHost');

    if (!host) return;

    // If already loaded once, just show it again.
    if (membersModalLoaded) {
        const modal = document.getElementById('membersModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
        return;
    }

    // Prevent duplicate AJAX calls on repeated clicks.
    if (membersModalLoading) return;
    membersModalLoading = true;

    try {
        const response = await fetch('members-modal-ajax.php', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        if (!response.ok) {
            throw new Error('Unable to load members.');
        }

        host.innerHTML = await response.text();
        membersModalLoaded = true;

        const modal = document.getElementById('membersModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Members Directory load failed:', error);
    } finally {
        membersModalLoading = false;
    }
}

Object.assign(window, { openMembersModal })

}
