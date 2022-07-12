// Store reference for body.

const piBody = document.querySelector("body");

// Create floater info icon.

const piIconInfo = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="pi-icon-info" width="24" height="24"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/></svg>
`;

// Create modal close icon.

const piIconClose = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="pi-icon-close" width="32" height="32"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
`;

// Create float content.

const piFloatContent = `${piIconInfo}<p>Project Info</p>`;

// Create floater and append float content to it.

const piFloat = document.createElement("div");
piFloat.classList.add("pi-float");
piFloat.setAttribute("title", "See info about this project.");
piFloat.innerHTML = piFloatContent;
piBody.append(piFloat);

// Define different information of the project (title, description, etc.) as strings in an object.

const projectInfo = {
  title: `FlexStart`,

  description: `
	<p>FlexStart is a clean and modern website UI which is suitable for all individuals and businesses looking for a website for their software, applications, SaaS, digital agency, and other related services and products.</p>

	<p><a href="https://bootstrapmade.com/demo/templates/FlexStart/" title="Design">Design</a>
	`,

  externalLinks: `
		<li><a title="On my website" href="https://flexstart.iamdanial.com/">On my website</a></li>
		<li><a title="On GitHub" href="https://github.com/DanialZahid/flexstart">On GitHub</a></li>
		`,

  license: `<a title="MIT" href="https://github.com/DanialZahid/flexstart/blob/main/LICENSE">MIT</a>`,
};

// Create modal content and add all the project info (from the projectInfo object) with template strings.

const piModalContent = `

<div class="pi-modal">

	<div class="pi-title-bar"><h2>${projectInfo.title}</h2>${piIconClose}</div>

	<div class="pi-wrapper">

		<h3>Description</h3>

		${projectInfo.description}

		<ul>${projectInfo.externalLinks}</ul>

		<h3>License</h3>

		<p>${projectInfo.license}</p>

	</div>

</div>
`;

// Create modal and append modal content to it.

const piModal = document.createElement("div");
piModal.classList.add("pi-modal-wrapper");
piModal.innerHTML = piModalContent;

// Display modal when clicked on floater.

piFloat.addEventListener("click", piDisplay);

// Display modal function.

function piDisplay() {
  piBody.append(piModal);
  piModal.classList.add("pi-modal-display");
  piBody.setAttribute("class", "pi-overflow-hidden"); // Hide browser scroll when modal is shown.

  // Close modal when clicked on close icon.

  const piModalCloseBtn = document.querySelector(".pi-icon-close");
  piModalCloseBtn.addEventListener("click", piRemove);
}

// Remove modal function.

function piRemove() {
  piModal.classList.remove("pi-modal-display");
  piBody.removeAttribute("class");

  // Wait .5s before removing modal so it completes its hide animation.

  setTimeout(() => {
    piModal.remove();
  }, 500);
}

/* Attributions

Font Awesome (https://fontawesome.com/) — Icon(s)

*/
