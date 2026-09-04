/* ==========================================================================
   script.js — the small amount of behaviour this site needs.

   1. Builds the project cards from the PROJECTS list in data/projects.js,
      so you never have to hand-edit card HTML.
   2. Builds the coursework link list from COURSEWORK.
   3. Runs the mobile navigation menu.
   4. Highlights the current page in the nav and stamps the footer year.

   You should not need to change anything in this file to add a project —
   edit data/projects.js instead.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- small helpers ---------------------------------------------- */

  // Escape text before putting it into HTML, so an apostrophe or an
  // ampersand in a project title can never break the page.
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function tagsHtml(tags) {
    if (!tags || !tags.length) return "";
    return '<ul class="tags">' +
      tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
      "</ul>";
  }

  /* ---------- 1. project cards -------------------------------------------- */

  function cardHtml(project, rankLabel) {
    var links = [];
    links.push('<a href="' + esc(project.page) + '">Read the write-up &rarr;</a>');
    if (project.repo) {
      links.push('<a href="' + esc(project.repo) + '" target="_blank" rel="noopener">GitHub</a>');
    }
    if (project.demo) {
      links.push('<a href="' + esc(project.demo) + '" target="_blank" rel="noopener">Live App</a>');
    }

    return '<article class="card">' +
      (rankLabel ? '<span class="card__rank">' + esc(rankLabel) + "</span>" : "") +
      '<h3 class="card__title"><a href="' + esc(project.page) + '">' + esc(project.title) + "</a></h3>" +
      tagsHtml(project.tags) +
      '<p class="card__blurb">' + esc(project.blurb) + "</p>" +
      (project.result ? '<p class="card__result">' + esc(project.result) + "</p>" : "") +
      '<div class="card__links">' + links.join("") + "</div>" +
      "</article>";
  }

  function renderProjects() {
    if (typeof PROJECTS === "undefined") return;

    // Home page: the three (or however many) projects marked featured.
    var featuredHost = document.getElementById("featured-projects");
    if (featuredHost) {
      var featured = PROJECTS.filter(function (p) { return p.featured; });
      featuredHost.innerHTML = featured
        .map(function (p, i) { return cardHtml(p, "No. " + (i + 1)); })
        .join("");
    }

    // Projects page: everything, featured ones first.
    var allHost = document.getElementById("all-projects");
    if (allHost) {
      var ordered = PROJECTS.slice().sort(function (a, b) {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
      allHost.innerHTML = ordered
        .map(function (p) { return cardHtml(p, p.featured ? "Featured" : p.year || ""); })
        .join("");
    }
  }

  /* ---------- 2. coursework list ------------------------------------------ */

  function renderCoursework() {
    var host = document.getElementById("coursework-list");
    if (!host || typeof COURSEWORK === "undefined") return;

    host.innerHTML = COURSEWORK.map(function (item) {
      return "<li>" +
        '<a href="' + esc(item.repo) + '" target="_blank" rel="noopener">' + esc(item.title) + "</a>" +
        '<span class="topic">' + esc(item.topic || "") + "</span>" +
        "</li>";
    }).join("");
  }

  /* ---------- 3. mobile navigation ---------------------------------------- */

  function initNav() {
    var toggle = document.querySelector(".nav__toggle");
    var links = document.getElementById("nav-links");
    if (!toggle || !links) return;

    var mobile = window.matchMedia("(max-width: 720px)");

    function sync() {
      // On desktop the menu is always visible; on mobile it starts closed.
      links.hidden = mobile.matches;
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = links.hidden;
      links.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close the menu after tapping a link.
    links.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && mobile.matches) {
        links.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    sync();
    if (mobile.addEventListener) mobile.addEventListener("change", sync);
  }

  /* ---------- 4. nav highlighting + footer year --------------------------- */

  function initActiveLink() {
    var current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

    document.querySelectorAll(".nav__links a").forEach(function (link) {
      var href = (link.getAttribute("href") || "").split("#")[0];
      var target = (href.split("/").pop() || "").toLowerCase();
      if (target && target === current) link.classList.add("is-active");
    });
  }

  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (node) {
      node.textContent = new Date().getFullYear();
    });
  }

  /* ---------- go ---------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", function () {
    renderProjects();
    renderCoursework();
    initNav();
    initActiveLink();
    initYear();
  });
})();
