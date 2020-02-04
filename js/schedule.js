const schedule_modal = document.getElementById('schedule-modal');
const schedule_btn = document.getElementById('schedule-float-btn');
var span = document.getElementsByClassName("close")[1];


schedule_btn.addEventListener('click', function(){
    schedule_modal.style.display = "block";
})

span.onclick = function() {
    schedule_modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == schedule_modal) {
      schedule_modal.style.display = "none";
    }
  }
