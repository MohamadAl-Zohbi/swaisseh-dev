// document.getElementById("post").addEventListener("click", () => {

//   document.getElementById("hidden-containar").style.display = "block";

// });

document.querySelector(".cancel-btn").addEventListener('click', () => {
  location.reload();
});


document.getElementById("exit-video-container").addEventListener("click", () => {

  document.getElementById("hidden-containar").style.display = "none";
  document.getElementById('file-input').value = "";
  document.getElementById('selected-items').innerHTML = "";
  document.querySelector(".cancel-btn").style.display = "none";
  document.querySelector(".send-btn").style.display = "none";
});

document.getElementById('upload-video').addEventListener('submit', (e) => {
  e.preventDefault();

  var formData = new FormData(e.target);

  var xhr = new XMLHttpRequest();

  // cancel the upload

  document.querySelector(".cancel-btn").addEventListener('click', () => {

    if (xhr && xhr.readyState !== XMLHttpRequest.DONE) {
      xhr.abort();
      alert('Upload cancelled.');
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  });



  // Update the progress bar
  xhr.upload.addEventListener('progress', (event) => {
    var percent = (event.loaded / event.total) * 100;
    document.getElementById('progress').value = percent;
    document.getElementById('progress-value').innerHTML = Math.round(percent) + "%";
    // document.getElementById('progress-status').innerText = Math.round(percent) + '%';

    Notification.requestPermission().then(perm => {
      if (perm == "granted") {
          new Notification(
              "Uploading...",{
                  body: percent  + "/100",
                  data: {hi:"jndc"},
                  tag: ""
              }
          )
      }
  });


  });

  // Handle completion and errors
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Handle successful upload
      alert('Upload complete!');
      location.reload();
    } else if (xhr.readyState == 4 && xhr.status != 200) {
      // Handle error
      console.error('Error uploading file.');
    }
  };

  // Send the request
  let api = ip+'/dev/swaisseh_api/posts.php';
  if (document.getElementById('file-input').files.length > 0) {
    xhr.open('POST', api, true);
    xhr.send(formData);
  }




});

document.getElementById('file-input').addEventListener('change', () => {
  let fileInput = document.getElementById('file-input');
  let file = fileInput.files[0];
  let fileSize = (file.size / (1024 * 1024)).toFixed(2); // in MB
  let previewContainer = document.getElementById('selected-items');
  let reader = new FileReader();
  let previewImage = document.createElement('img');

  if (document.getElementById('file-input').accept == "video/*") {
    previewImage = document.createElement('video')
    previewImage.controls = true;
  }


  if (fileSize >= 40) {
    document.getElementById('file-input').value = "";

    alert("ndjc")
  } else {

    previewContainer.innerHTML = '';
    reader.onload = function () {
      previewImage.src = reader.result;
      previewContainer.appendChild(previewImage);
    };


    if (file) {
      document.querySelector(".cancel-btn").style.display = "inline-block";
      document.querySelector(".send-btn").style.display = "inline-block";
      reader.readAsDataURL(file);

      previewContainer.innerHTML += `Selected file: ${file.name} (Size: ${fileSize} MB)`;
      previewContainer.innerHTML += '<br><label id="progress-value">0% </label><progress id="progress" max="100" value="0"></progress><br><textarea name="description" id="post_description" cols="30" rows="10" placeholder="description"></textarea>';
      document.getElementById("post_description").select();
    } else {
      previewContainer.innerHTML = 'No file selected';
      document.querySelector(".cancel-btn").style.display = "none";
      document.querySelector(".send-btn").style.display = "none";
    }
  }
});

function post(type) {
  document.getElementById("hidden-containar").style.display = "block";
  let fileInput = document.getElementById('file-input');
  if (type == 'video') {
    document.getElementById('file-input').accept = "video/*"
  } else if (type == 'photo') {
    document.getElementById('file-input').accept = "image/*"
  }
}