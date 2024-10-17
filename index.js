const containerForm = document.getElementById("containerForm");
const btnEdit = document.getElementById("btnEdit");
const btnSubmit = document.getElementById("btnSubmit");

// Elemen value
const name = document.getElementById("name");
const role = document.getElementById("role");
const availability = document.getElementById("availability");
const usia = document.getElementById("usia");
const lokasi = document.getElementById("lokasi");
const pengalaman = document.getElementById("pengalaman");
const email = document.getElementById("email");

// Elemen input
const inputName = document.getElementById("inputName");
const inputRole = document.getElementById("inputRole");
const inputAvailability = document.getElementById("inputAvailability");
const inputUsia = document.getElementById("inputUsia");
const inputLokasi = document.getElementById("inputLokasi");
const inputPengalaman = document.getElementById("inputPengalaman");
const inputEmail = document.getElementById("inputEmail");

const setValueByLocalstorage = async () => {
  const data = await JSON.parse(localStorage.getItem("data"));

  name.textContent = data.name || "Nadindra";
  usia.textContent = data.usia || "20";
  role.textContent = data.role || "Front End Engineer";
  availability.textContent = data.availability || "Fulltime";
  lokasi.textContent = data.lokasi || "Karawang, Indonesia";
  pengalaman.textContent = data.pengalaman || "2";
  email.textContent = data.email || "nadin@gmail.com";
};

const saveToLocalStorage = () => {
  let data = localStorage.getItem("data");
  let userData = {
    name: name.textContent,
    role: role.textContent,
    availability: availability.textContent,
    usia: usia.textContent,
    lokasi: lokasi.textContent,
    pengalaman: pengalaman.textContent,
    email: email.textContent,
  };

  if (!data) {
    localStorage.setItem("data", JSON.stringify(userData));
  }
};

const showEditForm = () => {
  if (containerForm.classList.contains("hidden")) {
    containerForm.classList.add("flex");
    containerForm.classList.remove("hidden");
  } else {
    containerForm.classList.add("hidden");
    containerForm.classList.remove("flex");
  }
};

const getValueToForm = () => {
  const data = {
    name: name.textContent,
    role: role.textContent,
    availability: availability.textContent,
    usia: usia.textContent,
    lokasi: lokasi.textContent,
    pengalaman: pengalaman.textContent,
    email: email.textContent,
  };

  inputName.value = data.name;
  inputRole.value = data.role;
  inputAvailability.value = data.availability;
  inputUsia.value = data.usia;
  inputLokasi.value = data.lokasi;
  inputPengalaman.value = data.pengalaman;
  inputEmail.value = data.email;
};

const updateData = () => {
  name.textContent = inputName.value;
  role.textContent = inputRole.value;
  availability.textContent = inputAvailability.value;
  usia.textContent = inputUsia.value;
  lokasi.textContent = inputLokasi.value;
  pengalaman.textContent = inputPengalaman.value;
  email.textContent = inputEmail.value;

  let userData = {
    name: name.textContent,
    role: role.textContent,
    availability: availability.textContent,
    usia: usia.textContent,
    lokasi: lokasi.textContent,
    pengalaman: pengalaman.textContent,
    email: email.textContent,
  };

  localStorage.setItem("data", JSON.stringify(userData));
};

btnEdit.addEventListener("click", () => {
  showEditForm();
  getValueToForm();
});

btnSubmit.addEventListener("click", async () => {
  await updateData();
  showEditForm();
  localStorage.setItem("data", JSON.stringify(userData));
});

window.onload = () => {
  saveToLocalStorage();
  setValueByLocalstorage();
};
