document.getElementById("cta-btn").onclick = function () {
    let input = document.getElementById("url-input").value;
    let value = input.trim();

    document.getElementById("success").style.display = "none";
    document.getElementById("fail").style.display = "none";

    var xhttp = new XMLHttpRequest();

    xhttp.onprogress = function () {
        if (xhttp.status == 200) {
            var obj = JSON.parse(this.response);
            if (obj.success) {
                document.getElementById("success").innerText = "Success";
                document.getElementById("success").style.display = "block";
            } else {
                document.getElementById("fail").innerText = obj.message;
                document.getElementById("fail").style.display = "block";
            }
        } else {
            // Failed
        }
    }

    xhttp.open("POST", "https://api.beaglesecurity.com/v1/testapplications/urlvalidate?url=" + value);

    xhttp.send();
}
