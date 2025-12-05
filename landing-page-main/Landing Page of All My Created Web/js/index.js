function toggleMembers(btn) {
    const project = btn.closest(".project");
    const list = project.querySelector(".members-list");

    // Close all other lists
    document.querySelectorAll(".members-list").forEach(l => {
        if (l !== list) l.classList.remove("show");
    });

    // Remove active style on other projects
    document.querySelectorAll(".project").forEach(p => {
        if (p !== project) p.classList.remove("active");
    });

    // Toggle only the clicked one
    list.classList.toggle("show");
    project.classList.toggle("active");
}
