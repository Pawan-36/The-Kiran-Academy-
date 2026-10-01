/**
 * THE KIRAN ACADEMY - INTERACTIVE CORE JAVASCRIPT
 * Features:
 * - Dynamic Course rendering with "View More" toggle
 * - Placements expansion (12+ placed candidates, initial 6 display)
 * - 10-digit mobile number validation
 * - Password complexity validation with special character check
 * - SPA Section Switcher & Modal Management
 */

// ==========================================
// 1. DATA REPOSITORIES
// ==========================================

// 12 Comprehensive IT Courses with Indian Rupee Fees
const coursesData = [
  {
    id: 1,
    category: "development",
    title: "Java Full Stack Development",
    duration: "5 Months (350+ Hrs)",
    fee: "₹36,000",
    skills: ["Core Java", "OOPs", "Spring Boot", "Hibernate", "React", "MySQL", "REST APIs", "Git"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80",
    description: "Industry-standard full stack curriculum covering Core Java, Collections, Multithreading, Spring Boot microservices, and React frontend integration with 4 live projects."
  },
  {
    id: 2,
    category: "development",
    title: "Python Full Stack with AI",
    duration: "4.5 Months (300+ Hrs)",
    fee: "₹34,000",
    skills: ["Python 3", "Django", "FastAPI", "React", "PostgreSQL", "OpenAI APIs", "Docker"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    description: "Master modern Python scripting, Django backend web architecture, asynchronous FastAPI services, and integrating generative AI models into production applications."
  },
  {
    id: 3,
    category: "development",
    title: "MERN Full Stack Developer",
    duration: "4 Months (280+ Hrs)",
    fee: "₹35,000",
    skills: ["MongoDB", "Express.js", "React 18", "Node.js", "Redux Toolkit", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80",
    description: "End-to-end JavaScript mastery. Build high-scale reactive applications with MongoDB databases, Node.js server architectures, and interactive React user interfaces."
  },
  {
    id: 4,
    category: "testing",
    title: "Software Testing (Manual + Automation)",
    duration: "3.5 Months (240+ Hrs)",
    fee: "₹28,000",
    skills: ["Selenium WebDriver", "Java", "TestNG", "Cucumber BDD", "Postman", "Jira", "Jenkins"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
    description: "Transform into an SDET expert. Master test case design, Selenium WebDriver automation, API testing with Postman, and CI/CD automated pipeline executions."
  },
  {
    id: 5,
    category: "data",
    title: "Data Science & Machine Learning",
    duration: "6 Months (400+ Hrs)",
    fee: "₹42,000",
    skills: ["Python", "Pandas", "Scikit-Learn", "Deep Learning", "TensorFlow", "NLP", "Power BI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    description: "Deep dive into statistical modelling, predictive analytics, deep neural networks, natural language processing, and deploying machine learning models on cloud endpoints."
  },
  {
    id: 6,
    category: "testing",
    title: "DevOps & AWS Cloud Architecture",
    duration: "4 Months (260+ Hrs)",
    fee: "₹32,000",
    skills: ["AWS Services", "Docker", "Kubernetes", "Terraform", "Jenkins", "Ansible", "Linux"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    description: "Learn cloud automation, Infrastructure as Code using Terraform, container orchestration with Kubernetes, and enterprise continuous integration & continuous deployment."
  },
  {
    id: 7,
    category: "data",
    title: "Data Analytics (SQL + Power BI + Python)",
    duration: "3.5 Months (220+ Hrs)",
    fee: "₹30,000",
    skills: ["Advanced SQL", "Power BI", "Tableau", "Excel Modelling", "Python EDA", "DAX"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    description: "Turn raw business datasets into actionable executive insights. Master complex SQL joins, data warehousing, interactive dashboards, and statistical storytelling."
  },
  {
    id: 8,
    category: "development",
    title: "Spring Boot & Microservices Masterclass",
    duration: "2.5 Months (160+ Hrs)",
    fee: "₹22,000",
    skills: ["Spring Boot 3", "Microservices", "Kafka", "Eureka", "API Gateway", "OAuth2", "Docker"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
    description: "Advanced architecture course designed for backend developers. Covers event-driven architectures with Apache Kafka, service discovery, distributed tracing, and resilience patterns."
  },
  {
    id: 9,
    category: "development",
    title: "Flutter & Mobile App Development",
    duration: "4 Months (250+ Hrs)",
    fee: "₹31,000",
    skills: ["Dart", "Flutter", "Firebase", "State Management", "REST APIs", "App Store / Play Store"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=80",
    description: "Create cross-platform native iOS and Android apps with a single codebase. Integrate real-time Firebase databases, camera, location services, and payment gateways."
  },
  {
    id: 10,
    category: "testing",
    title: "Cyber Security & Ethical Hacking",
    duration: "5 Months (320+ Hrs)",
    fee: "₹38,000",
    skills: ["Kali Linux", "Wireshark", "Metasploit", "Network Security", "OWASP Top 10", "SOC"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    description: "Learn offensive penetration testing, defensive SOC analysis, vulnerability assessments, web app security audits, and prepare for globally recognized CEH certification."
  },
  {
    id: 11,
    category: "development",
    title: "Salesforce Admin & Development",
    duration: "3.5 Months (220+ Hrs)",
    fee: "₹33,000",
    skills: ["Salesforce CRM", "Apex", "Lightning Web Components", "SOQL", "Process Automation"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
    description: "Master the world's #1 CRM platform. Learn declarative configuration, Apex object-oriented coding, Lightning Web Components (LWC), and enterprise business automations."
  },
  {
    id: 12,
    category: "data",
    title: "Artificial Intelligence & Generative AI",
    duration: "5 Months (340+ Hrs)",
    fee: "₹45,000",
    skills: ["LLMs", "LangChain", "Vector Databases", "Prompt Engineering", "RAG Systems", "HuggingFace"],
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80",
    description: "Pioneer the next technology frontier. Build production RAG applications, integrate LangChain with Pinecone vector DBs, and fine-tune open source LLMs."
  }
];

// 12 Verified Student Placements (Initial 6 display, rest expand on click)
const placementsData = [
  {
    id: 1,
    name: "Rohan Deshmukh",
    course: "Java Full Stack Development",
    company: "Tata Consultancy Services (TCS)",
    role: "System Engineer",
    package: "₹7.2 LPA",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    quote: "The mock interviews by Kiran Sir gave me immense confidence during my technical interview round!"
  },
  {
    id: 2,
    name: "Pooja Patil",
    course: "Python Full Stack & AI",
    company: "Infosys Ltd",
    role: "Associate Consultant",
    package: "₹6.8 LPA",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    quote: "Coming from a non-IT branch, The Kiran Academy made coding understandable and completely practical."
  },
  {
    id: 3,
    name: "Amit Kulkarni",
    course: "Java Full Stack Development",
    company: "Persistent Systems",
    role: "Software Developer",
    package: "₹8.5 LPA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    quote: "Spring Boot microservices modules and daily coding assignments were directly asked in my client interview."
  },
  {
    id: 4,
    name: "Sneha Jadhav",
    course: "Software Testing QA",
    company: "Capgemini",
    role: "Automation Test Engineer",
    package: "₹5.5 LPA",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    quote: "Selenium and BDD Cucumber frameworks taught here match 100% with the corporate project standards."
  },
  {
    id: 5,
    name: "Prathamesh Shinde",
    course: "Data Science & ML",
    company: "LTIMindtree",
    role: "Data Analyst / AI Engineer",
    package: "₹9.2 LPA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    quote: "I cracked a high-paying product firm right after graduation thanks to the specialized data science training."
  },
  {
    id: 6,
    name: "Neha Joshi",
    course: "MERN Stack Development",
    company: "Wipro Technologies",
    role: "Full Stack Engineer",
    package: "₹6.5 LPA",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    quote: "The placement support is relentless. They scheduled 7 consecutive drives until I secured my dream role!"
  },
  {
    id: 7,
    name: "Saurabh More",
    course: "Java Full Stack Development",
    company: "Cognizant",
    role: "Programmer Analyst",
    package: "₹7.0 LPA",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80",
    quote: "Kiran Sir's logic building sessions in Java Collections made writing algorithmic solutions effortless."
  },
  {
    id: 8,
    name: "Anjali Gokhale",
    course: "DevOps & Cloud",
    company: "Tech Mahindra",
    role: "Cloud DevOps Specialist",
    package: "₹10.5 LPA",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&auto=format&fit=crop&q=80",
    quote: "Mastering AWS, Docker, and Kubernetes on real cloud accounts changed my career trajectory completely."
  },
  {
    id: 9,
    name: "Vaibhav Jagtap",
    course: "Python Full Stack",
    company: "KPIT Technologies",
    role: "Software Engineer",
    package: "₹6.2 LPA",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
    quote: "The resume building sessions and HR interview prep turned my nervousness into confident communication."
  },
  {
    id: 10,
    name: "Deepika Gaikwad",
    course: "Software Testing QA",
    company: "Accenture",
    role: "Quality Assurance Engineer",
    package: "₹6.0 LPA",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop&q=80",
    quote: "From manual test case documentation to automated Jenkins pipelines, everything was covered in detail."
  },
  {
    id: 11,
    name: "Akash Wagh",
    course: "Java Full Stack Development",
    company: "Birlasoft",
    role: "Java Backend Developer",
    package: "₹8.0 LPA",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80",
    quote: "Got placed in less than 30 days after completing the course. Best institute for career transformation."
  },
  {
    id: 12,
    name: "Pooja Wankhede",
    course: "Data Science & ML",
    company: "Hexaware Technologies",
    role: "Machine Learning Engineer",
    package: "₹11.0 LPA",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80",
    quote: "The hands-on capstone project on Predictive Analysis stood out prominently on my resume!"
  }
];

// Display State Variables
let coursesShowAll = false;
let placementsShowAll = false;
let activeCourseCategory = "all";
let activeCourseSearch = "";

// ==========================================
// 2. DOM INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderCourses();
  renderPlacements();
  setupPasswordStrengthWatcher();
  setupMobileMenu();
});

// Mobile Menu Toggle
function setupMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("navMenu");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
}

// Single Page Navigation (SPA Section Switching)
function showSection(sectionId) {
  const sections = document.querySelectorAll(".page-section");
  sections.forEach(sec => sec.classList.remove("active-section"));

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active-section");
  }

  // Update active nav links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === `#${sectionId}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Close mobile nav if opened
  const nav = document.getElementById("navMenu");
  if (nav) nav.classList.remove("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 3. COURSES MODULE (Initial 6, View More, Search & Filter)
// ==========================================
function renderCourses() {
  const container = document.getElementById("coursesGrid");
  if (!container) return;

  // Filter based on category and search query
  let filtered = coursesData.filter(course => {
    const matchesCategory = (activeCourseCategory === "all" || course.category === activeCourseCategory);
    const matchesSearch = course.title.toLowerCase().includes(activeCourseSearch.toLowerCase()) ||
                          course.skills.some(s => s.toLowerCase().includes(activeCourseSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Decide how many to display
  const totalCount = filtered.length;
  const displayLimit = coursesShowAll ? totalCount : 6;
  const displayedCourses = filtered.slice(0, displayLimit);

  // Render cards
  container.innerHTML = displayedCourses.map(course => `
    <div class="course-card">
      <div class="course-badge-wrap">
        <img src="${course.image}" alt="${course.title}" class="course-img" loading="lazy">
        <span class="course-tag">${course.category}</span>
      </div>
      <div class="course-body">
        <div class="course-duration"><i class="fa-regular fa-clock"></i> ${course.duration}</div>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-skills">
          ${course.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div class="course-footer">
          <div class="course-fee">
            <span class="fee-label">Total Course Fee</span>
            <span class="fee-amount">${course.fee}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="openEnrollModal('${course.title}', '${course.fee}')">
            <i class="fa-solid fa-graduation-cap"></i> Enroll Now
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Handle View More button
  const loadMoreWrap = document.getElementById("coursesLoadMoreWrap");
  const countSpan = document.getElementById("hiddenCourseCount");
  const toggleBtn = document.getElementById("toggleCoursesBtn");

  if (totalCount > 6) {
    loadMoreWrap.style.display = "block";
    const remaining = totalCount - 6;
    if (coursesShowAll) {
      toggleBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i> Show Less Courses`;
    } else {
      toggleBtn.innerHTML = `<i class="fa-solid fa-arrow-down"></i> View More Courses (${remaining} remaining)`;
    }
  } else {
    loadMoreWrap.style.display = "none";
  }
}

function toggleCoursesDisplay() {
  coursesShowAll = !coursesShowAll;
  renderCourses();
}

function filterCourseCategory(cat, btnElement) {
  activeCourseCategory = cat;
  document.querySelectorAll(".category-pills .pill").forEach(p => p.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");
  coursesShowAll = false; // Reset view more state on filter change
  renderCourses();
}

function filterCourses() {
  const input = document.getElementById("courseSearchInput");
  activeCourseSearch = input ? input.value.trim() : "";
  coursesShowAll = false;
  renderCourses();
}

// ==========================================
// 4. PLACEMENTS MODULE (Initial 6, View More 10+ Records)
// ==========================================
function renderPlacements() {
  const container = document.getElementById("placementsGrid");
  if (!container) return;

  const total = placementsData.length;
  const displayLimit = placementsShowAll ? total : 6;
  const displayedPlacements = placementsData.slice(0, displayLimit);

  container.innerHTML = displayedPlacements.map(p => `
    <div class="placement-card">
      <img src="${p.avatar}" alt="${p.name}" class="placement-avatar" loading="lazy">
      <div class="placement-info">
        <h4 class="placement-name">${p.name}</h4>
        <div class="placement-role">${p.role}</div>
        <div class="placement-company"><i class="fa-solid fa-building"></i> ${p.company}</div>
        <div class="placement-quote">"${p.quote}"</div>
        <div class="placement-meta">
          <span style="font-size:0.75rem; color:#64748b;">${p.course}</span>
          <span class="placement-package">${p.package}</span>
        </div>
      </div>
    </div>
  `).join('');

  const loadMoreWrap = document.getElementById("placementsLoadMoreWrap");
  const toggleBtn = document.getElementById("togglePlacementsBtn");

  if (total > 6) {
    loadMoreWrap.style.display = "block";
    const remaining = total - 6;
    if (placementsShowAll) {
      toggleBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i> Show Less Placements`;
    } else {
      toggleBtn.innerHTML = `<i class="fa-solid fa-arrow-down"></i> View More Placements (${remaining} remaining)`;
    }
  } else {
    loadMoreWrap.style.display = "none";
  }
}

function togglePlacementsDisplay() {
  placementsShowAll = !placementsShowAll;
  renderPlacements();
}

// ==========================================
// 5. FORM VALIDATION & LOGIC
// ==========================================

// Regex rules
const MOBILE_REGEX = /^[6-9]\d{9}$/;                       // Exactly 10 digits starting with 6, 7, 8, or 9
const SPECIAL_CHAR_REGEX = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; // Special character check

function setupPasswordStrengthWatcher() {
  const pwdInput = document.getElementById("signupPassword");
  if (!pwdInput) return;

  pwdInput.addEventListener("input", () => {
    const val = pwdInput.value;
    const chkLen = document.getElementById("chkLength");
    const chkSpecial = document.getElementById("chkSpecial");
    const chkNum = document.getElementById("chkNumber");

    // Length check
    if (val.length >= 8) {
      chkLen.classList.add("valid");
      chkLen.innerHTML = `<i class="fa-solid fa-circle-check"></i> Min 8 Characters`;
    } else {
      chkLen.classList.remove("valid");
      chkLen.innerHTML = `<i class="fa-regular fa-circle"></i> Min 8 Characters`;
    }

    // Special Char check
    if (SPECIAL_CHAR_REGEX.test(val)) {
      chkSpecial.classList.add("valid");
      chkSpecial.innerHTML = `<i class="fa-solid fa-circle-check"></i> At least 1 Special Char (!@#$%^&*)`;
    } else {
      chkSpecial.classList.remove("valid");
      chkSpecial.innerHTML = `<i class="fa-regular fa-circle"></i> At least 1 Special Char (!@#$%^&*)`;
    }

    // Number check
    if (/\d/.test(val)) {
      chkNum.classList.add("valid");
      chkNum.innerHTML = `<i class="fa-solid fa-circle-check"></i> At least 1 Number`;
    } else {
      chkNum.classList.remove("valid");
      chkNum.innerHTML = `<i class="fa-regular fa-circle"></i> At least 1 Number`;
    }
  });
}

// Signup Submission Handler with strict validation
function handleSignup(event) {
  event.preventDefault();

  const name = document.getElementById("signupFullName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const mobile = document.getElementById("signupMobile").value.trim();
  const course = document.getElementById("signupCourse").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword").value;

  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("mobileError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmPasswordError").innerText = "";

  let isValid = true;

  // Name Validation
  if (name.length < 3) {
    document.getElementById("nameError").innerText = "Please enter your full name (at least 3 characters).";
    isValid = false;
  }

  // Mobile Validation (Exact 10 digits Indian format)
  if (!MOBILE_REGEX.test(mobile)) {
    document.getElementById("mobileError").innerText = "Please enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9).";
    isValid = false;
  }

  // Password Validation (Length + Special Char + Number)
  if (password.length < 8) {
    document.getElementById("passwordError").innerText = "Password must be at least 8 characters long.";
    isValid = false;
  } else if (!SPECIAL_CHAR_REGEX.test(password)) {
    document.getElementById("passwordError").innerText = "Password must contain at least one special character (!@#$%^&* etc.).";
    isValid = false;
  } else if (!/\d/.test(password)) {
    document.getElementById("passwordError").innerText = "Password must contain at least one numeric digit.";
    isValid = false;
  }

  // Confirm Password Check
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
    isValid = false;
  }

  if (!isValid) return;

  // Save student to local session and update UI
  const student = { name, email, mobile, course };
  localStorage.setItem("tka_student", JSON.stringify(student));

  showToast(`Welcome ${name}! Your account has been registered successfully.`, "success");
  closeModal("signupModal");

  // Update Dashboard Profile
  updateDashboardUser(student);
  showSection("dashboard");
}

// Login Submission Handler
function handleLogin(event) {
  event.preventDefault();

  const mobile = document.getElementById("loginMobile").value.trim();
  const password = document.getElementById("loginPassword").value;

  const mobileErr = document.getElementById("loginMobileError");
  const passErr = document.getElementById("loginPasswordError");
  mobileErr.innerText = "";
  passErr.innerText = "";

  let isValid = true;

  if (!MOBILE_REGEX.test(mobile)) {
    mobileErr.innerText = "Enter a valid 10-digit mobile number.";
    isValid = false;
  }

  if (password.length < 6) {
    passErr.innerText = "Please enter your valid password.";
    isValid = false;
  }

  if (!isValid) return;

  // Emulate authentication
  const stored = localStorage.getItem("tka_student");
  let studentName = "Student";
  if (stored) {
    try {
      const data = JSON.parse(stored);
      if (data.name) studentName = data.name;
    } catch(e) {}
  }

  showToast(`Logged in successfully! Welcome back, ${studentName}.`, "success");
  closeModal("loginModal");
  showSection("dashboard");
}

function updateDashboardUser(student) {
  const nameEl = document.getElementById("dashUserName");
  const roleEl = document.getElementById("dashUserRole");
  if (nameEl) nameEl.innerText = student.name;
  if (roleEl) roleEl.innerText = `${student.course} Batch #84`;
}

// Password Visibility Toggle
function togglePasswordVisibility(fieldId, btn) {
  const field = document.getElementById(fieldId);
  if (!field) return;

  if (field.type === "password") {
    field.type = "text";
    btn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  } else {
    field.type = "password";
    btn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
}

// Mock Interview Booking Handler
function handleMockBooking(event) {
  event.preventDefault();
  const name = document.getElementById("mockName").value.trim();
  const phone = document.getElementById("mockPhone").value.trim();
  const domain = document.getElementById("mockDomain").value;
  const date = document.getElementById("mockDate").value;

  if (!MOBILE_REGEX.test(phone)) {
    showToast("Please provide a valid 10-digit mobile number.", "error");
    return;
  }

  showToast(`Mock Interview slot for ${domain} booked on ${date}. Our coordinator will call you on ${phone}!`, "success");
  document.getElementById("mockBookingForm").reset();
}

// Course Enrollment Modal
function openEnrollModal(courseTitle, fee) {
  document.getElementById("enrollModalTitle").innerText = `Enroll in ${courseTitle}`;
  document.getElementById("enrollModalFee").innerText = fee;
  document.getElementById("enrollCourseName").value = courseTitle;
  openModal("enrollModal");
}

function handleEnrollmentSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("enrollStudentName").value.trim();
  const mobile = document.getElementById("enrollStudentMobile").value.trim();
  const course = document.getElementById("enrollCourseName").value;

  if (!MOBILE_REGEX.test(mobile)) {
    showToast("Please enter a valid 10-digit mobile number.", "error");
    return;
  }

  showToast(`Seat reserved for ${name} in ${course}! Verification details sent via SMS.`, "success");
  closeModal("enrollModal");
  document.getElementById("enrollForm").reset();
}

function reserveDemoSeat(topic) {
  showToast(`Reserved a live seat for "${topic}". Check your registered mobile for the Zoom/Lab link!`, "info");
}

function playDemoVideo(title, url) {
  showToast(`Opening lecture preview: ${title}`, "info");
}

// ==========================================
// 6. MODAL UTILITIES & TOASTS
// ==========================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

function switchModal(fromId, toId) {
  closeModal(fromId);
  openModal(toId);
}

// Close on outside overlay click
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "error") icon = "fa-triangle-exclamation";

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}