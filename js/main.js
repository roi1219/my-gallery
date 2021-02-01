'use strict'

console.log('Starting up');

$(document).ready(init);
$('.btn-send').click(sendMSG);

function init() {
    renderProjs();
}

function renderProjs() {
    var projs = getProjs();
    var strHTML = projs.map(function (proj) {
        return `
        <div onclick="renderModal('${proj.id}')" class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${proj.imgURL}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>`
    }).join('');
    $('.proj-container').html(strHTML);
}

function renderModal(projID) {
    console.log('hi');
    var proj = getProjById(projID);
    var date = new Date(proj.publishedAt);
    console.log('date:', proj.publishedAt)
    var strHTML = `<h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}.</p>
    <img class="img-fluid d-block mx-auto" src="${proj.imgURL}" alt="">
    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
      blanditiis
      dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
      cupiditate,
      maiores repudiandae, nostrum, reiciendis facere nemo!</p>
      <ul class="list-inline">
        <li>Date: ${date}</li>
      <li>Client: Explore</li>
      <li>Category: Graphic Design</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>`;
    $('.proj-modal').html(strHTML);
}

function sendMSG(ev) {
    ev.preventDefault()
    var email = $('#email').val();
    var subject = $('#subject').val();
    var msg = $('#msg').val();
    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${msg}`;
    window.open(url);
    openCanvas();
    $('#email').val('');
    $('#subject').val('');
    $('#msg').val('');
}