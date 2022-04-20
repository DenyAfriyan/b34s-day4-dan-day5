const actualBtn = document.getElementById('image');

const fileChosen = document.getElementById('file-chosen');

let blogs = [];

function addBlog(event) {
  event.preventDefault();
  var d1 = document.getElementById('startDate').value;
  var d2 = document.getElementById('endDate').value;
  const dateOne = new Date(d1);
  const dateTwo = new Date(d2);
  console.log(dateOne);
  console.log(dateTwo);
  const time = Math.abs(dateTwo - dateOne);
  console.log(time);
  const month = Math.ceil(time / (1000 * 60 * 60 * 24 * 30));

  let title = document.getElementById('projectName').value;
  let content = document.getElementById('description').value;
  let logoNextjs = document.getElementById('nextJs').checked;
  let logoNodejs = document.getElementById('nodeJs').checked;
  let logoReactjs = document.getElementById('reactJs').checked;
  let logoTypeScript = document.getElementById('typeScript').checked;

  if (logoNextjs == true) {
    logoNextjs = './assets/img/nextJs.svg';
  } else {
    logoNextjs = '';
  }

  if (logoNodejs == true) {
    logoNodejs = './assets/img/nodeJs.svg';
  } else {
    logoNodejs = '';
  }

  if (logoReactjs == true) {
    logoReactjs = './assets/img/reactJs.svg';
  } else {
    logoReactjs = '';
  }

  if (logoTypeScript == true) {
    logoTypeScript = './assets/img/typeScript.svg';
  } else {
    logoTypeScript = '';
  }

  let image = document.getElementById('image');

  image = URL.createObjectURL(image.files[0]);
  console.log(image);

  let blog = {
    title: title,
    content: content,
    image: image,
    logoNextjs: logoNextjs,
    logoNodejs: logoNodejs,
    logoReactjs: logoReactjs,
    logoTypeScript: logoTypeScript,
    month: month,
  };

  blogs.push(blog);

  console.table(blogs);
  renderBlog();
}

function renderBlog() {
  let containerBlog = document.getElementById('contents');
  containerBlog.innerHTML = firstBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    containerBlog.innerHTML += `
    <div class="card-item">
    <div class="card-image">logoNextjs
      <img src="${blogs[i].image}" width="370px" height="250px" />
    </div>
    <div class="card-title">
      <a href="blog-detail.html"><h2>${blogs[i].title}</h2></a>
      <span id="">durasi : ${blogs[i].month} bulan</span>
    </div>
    <div class="card-body">
      <p>${blogs[i].content}</p>
    </div>
    <div class="card-logo">
      <img src="${blogs[i].logoNodejs}" width="30px" />
      <img src="${blogs[i].logoReactjs}" width="30px" />
      <img src="${blogs[i].logoNextjs}" width="30px" />
      <img src="${blogs[i].logoTypeScript}" width="30px" />
    </div>
    <div class="card-button">
      <a>edit</a>
      <a>delete</a>
    </div>
  </div>  
 `;
  }
}

function firstBlogContent() {
  return `
  <div class="card-item">
  <div class="card-image">
    <img src="./assets/img/mock-up-hp.png" width="370px" height="250px" />
  </div>
  <div class="card-title">
    <a href="blog-detail.html"><h2>Dumbways Mobile App - 2021</h2></a>
    <span>durasi :3 bulan</span>
  </div>
  <div class="card-body">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores delectus voluptas possimus at sapiente reprehenderit alias! Consequuntur facere, enim iusto vero cupiditate eligendi reprehenderit ea tenetur dolor quaerat</p>
  </div>
  <div class="card-logo">
    <img src="./assets/img/nodeJs.svg" width="30px" />
    <img src="./assets/img/reactJs.svg" width="30px" />
    <img src="./assets/img/nextJs.svg" width="30px" />
    <img src="./assets/img/typeScript.svg" width="30px" />
  </div>
  <div class="card-button">
    <a>edit</a>
    <a>delete</a>
  </div>
</div>`;
}

/*function calculateMonth() {
  
  document.getElementById('output').innerHTML = month + ' bulan';
}*/

actualBtn.addEventListener('change', function () {
  fileChosen.textContent = this.files[0].name;
});
