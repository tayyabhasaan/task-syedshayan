import $ from 'jquery'
const jQuery = $
const onReady = (fn) => fn() // the React tree is already mounted when this runs

export default function dropdowns() {

function toggleMenu(button) {
    const menu = button.nextElementSibling;
    // Toggle this one
    menu.classList.toggle('hidden');
}
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    
    // Close all other dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        if (menu.id !== dropdownId) {
            menu.classList.add('hidden');
        }
    });
    
    // Toggle the current dropdown
    dropdown.classList.toggle('hidden');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown-container')) {
        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            menu.classList.add('hidden');
        });
    }
});

function deleteUser(userId, btn) {
  if (!confirm("Are you sure you want to delete your profile?")) return;

  // AJAX request to delete_user.php
  $.ajax({
    url: 'delete_user.php',
    method: 'POST',
    data: { id: userId },
    success: function(response) {
      response = response.trim();
      if (response === 'success') {
        // Remove user visually
        $(btn).closest('.relative').fadeOut(400, function() {
          $(this).remove();
          alert('The profile has been deleted successfully and all associated data has been removed from your account settings.');
          location.reload();
        });
      } else {
        alert('❌ Failed to delete user. ' + response);
      }
    },
    error: function() {
      alert('⚠️ Something went wrong. Please try again.');
    }
  });
}

Object.assign(window, { toggleMenu, toggleDropdown, deleteUser })

}
