// Helper function to get float value from input, defaulting to 0.0 if empty
function getVal(id) {
    let val = parseFloat(document.getElementById(id).value);
    return isNaN(val) ? 0.0 : val;
}

function calculateGPA() {
    // 1. MS (sem, internal)
    let ms_internal = getVal('ms_int');
    let ms_sem = getVal('ms_sem');

    // 2. BEEE (sem, lab, internal)
    let beee_internal = getVal('beee_int');
    let beee_lab = getVal('beee_lab');
    let beee_sem = getVal('beee_sem');

    // 3. EC (sem, lab, internal)
    let ec_internal = getVal('ec_int');
    let ec_lab = getVal('ec_lab');
    let ec_sem = getVal('ec_sem');

    // 4. EPCS (lab, internal)
    let epcs_internal = getVal('epcs_int');
    let epcs_lab = getVal('epcs_lab');

    // 5. CS (lab, internal)
    let cs_internal = getVal('cs_int');
    let cs_lab = getVal('cs_lab');

    // 6. CODE (sem, internal)
    let code_internal = getVal('code_int');
    let code_sem = getVal('code_sem');

    // 7. PSUP (sem, lab, internal)
    let psup_internal = getVal('psup_int');
    let psup_lab = getVal('psup_lab');
    let psup_sem = getVal('psup_sem');

    // Calculations exactly translated from previous logic mapping to new subjects
    // (sem): internal + (sem * 40/60)
    // (lab): internal + lab
    // (sem, lab): internal + (lab * 16/40) + (sem * 24/60)

    let ms_grade = (ms_internal + (ms_sem * 40 / 60));
    let beee_grade = (beee_internal + (beee_lab * (16 / 40)) + (beee_sem * (24 / 60)));
    let ec_grade = (ec_internal + (ec_lab * (16 / 40)) + (ec_sem * (24 / 60)));
    let epcs_grade = (epcs_internal + epcs_lab);
    let cs_grade = (cs_internal + cs_lab);
    let code_grade = (code_internal + (code_sem * 40 / 60));
    let psup_grade = (psup_internal + (psup_lab * (16 / 40)) + (psup_sem * (24 / 60)));

    // Assuming typical weights/credits for final grade sum
    // Adjust these credits if needed
    let final_grade = ((3 * ms_grade) + (3 * beee_grade) + (4 * ec_grade) + (1 * epcs_grade) + (1 * cs_grade) + (4 * code_grade) + (3 * psup_grade)) / 19;

    // Display results, formatting to 2 decimal places for neatness
    document.getElementById('res_ms').innerText = ms_grade.toFixed(2);
    document.getElementById('res_beee').innerText = beee_grade.toFixed(2);
    document.getElementById('res_ec').innerText = ec_grade.toFixed(2);
    document.getElementById('res_epcs').innerText = epcs_grade.toFixed(2);
    document.getElementById('res_cs').innerText = cs_grade.toFixed(2);
    document.getElementById('res_code').innerText = code_grade.toFixed(2);
    document.getElementById('res_psup').innerText = psup_grade.toFixed(2);
    document.getElementById('res_final').innerText = final_grade.toFixed(2);

    // Show the results section with a nice fade in
    document.getElementById('results-section').style.display = 'block';

    // Scroll down to results smoothly
    document.getElementById('results-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Cosmos Glitter Mouse Trail Effect
document.addEventListener('mousemove', function (e) {
    // Only spawn occasionally for performance and aesthetic spacing
    if (Math.random() > 0.3) return;

    const glitter = document.createElement('div');
    glitter.className = 'cosmos-glitter';

    // Add scroll offset so it stays under the cursor when scrolling
    const scrollX = window.scrollX || document.documentElement.scrollLeft;
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    const offsetX = (Math.random() - 0.5) * 30;
    const offsetY = (Math.random() - 0.5) * 30;

    glitter.style.left = `${e.clientX + scrollX + offsetX}px`;
    glitter.style.top = `${e.clientY + scrollY + offsetY}px`;

    // Random cosmos colors
    const colors = ['#8b5cf6', '#ec4899', '#3b82f6', '#ffffff', '#c084fc', '#fbcfe8'];
    glitter.style.color = colors[Math.floor(Math.random() * colors.length)];
    glitter.style.background = glitter.style.color;

    // Random size
    const size = Math.random() * 4 + 2;
    glitter.style.width = `${size}px`;
    glitter.style.height = `${size}px`;

    document.body.appendChild(glitter);

    // Clean up
    setTimeout(() => {
        glitter.remove();
    }, 1000);
});
