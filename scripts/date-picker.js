const today = new Date().toISOString().split("T")[0];
document.getElementById("preferred-date").setAttribute("min", today);
