// Saves options to chrome.storage
function save_options() {
  chrome.storage.sync.set({
    "type": document.getElementById('type').value,
    "startNekoX": document.getElementById('startNekoX').value,
    "startNekoY": document.getElementById('startNekoY').value
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get(['type','startNekoX','startNekoX'], function(items) {
  	if (items) {
      document.getElementById('type').value = items.type ? items.type : 'white';
      document.getElementById('type').dispatchEvent(new Event('change'));
      document.getElementById('startNekoX').value = items.startNekoX ? items.startNekoX : 0;
      document.getElementById('startNekoY').value = items.startNekoY ? items.startNekoY : 0;
    }
  });
}

function updateNeko() {
    document.getElementById('preview').setAttribute('src','images/'+this.value+'/still.gif');
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('type').addEventListener('change',
    updateNeko);