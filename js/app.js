/**
 * Material Dashboard 2 - Interactive Application Logic
 * Configurator, dynamic modals, search filtering, theme toggles, and data export
 */

document.addEventListener('DOMContentLoaded', function () {
  // --------------------------------------------------------------------------
  // 1. Navigation Active Item Switcher
  // --------------------------------------------------------------------------
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 2. Mobile Sidebar Drawer & Backdrop
  // --------------------------------------------------------------------------
  const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');
  const sidebar = document.getElementById('sidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('show');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('show');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (mobileSidebarToggle) mobileSidebarToggle.addEventListener('click', openSidebar);
  if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
  if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeSidebar);

  // --------------------------------------------------------------------------
  // 3. Professional Background Presets
  // --------------------------------------------------------------------------
  const presetButtons = document.querySelectorAll('.btn-preset');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const backgroundPresets = ['bg-executive', 'bg-grid', 'bg-aurora', 'bg-scenic'];
  let currentPresetIndex = 0;

  function setBackgroundPreset(presetName) {
    backgroundPresets.forEach(cls => document.body.classList.remove(cls));
    document.body.classList.add(presetName);

    presetButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-bg') === presetName);
    });

    if (themeToggleBtn) {
      const span = themeToggleBtn.querySelector('span');
      if (presetName === 'bg-executive') span.textContent = 'Executive Slate';
      else if (presetName === 'bg-grid') span.textContent = 'Engineering Grid';
      else if (presetName === 'bg-aurora') span.textContent = 'Aurora SaaS';
      else if (presetName === 'bg-scenic') span.textContent = 'Scenic Canvas';
    }
  }

  presetButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const targetPreset = this.getAttribute('data-bg');
      setBackgroundPreset(targetPreset);
      currentPresetIndex = backgroundPresets.indexOf(targetPreset);
    });
  });

  // Sidebar button cycles through background presets
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      currentPresetIndex = (currentPresetIndex + 1) % backgroundPresets.length;
      setBackgroundPreset(backgroundPresets[currentPresetIndex]);
    });
  }

  // --------------------------------------------------------------------------
  // 4. Configurator: Sidebar Accent Colors
  // --------------------------------------------------------------------------
  const colorCircles = document.querySelectorAll('.color-circle');
  colorCircles.forEach(circle => {
    circle.addEventListener('click', function () {
      colorCircles.forEach(c => c.classList.remove('active'));
      this.classList.add('active');

      const color = this.getAttribute('data-color');
      document.body.classList.remove('theme-primary', 'theme-dark', 'theme-info', 'theme-success', 'theme-warning', 'theme-danger');
      document.body.classList.add(`theme-${color}`);
    });
  });

  // --------------------------------------------------------------------------
  // 5. Configurator: Sidenav Type (Dark, Transparent, White)
  // --------------------------------------------------------------------------
  const sidenavDarkBtn = document.getElementById('sidenavDarkBtn');
  const sidenavTransparentBtn = document.getElementById('sidenavTransparentBtn');
  const sidenavWhiteBtn = document.getElementById('sidenavWhiteBtn');

  function setSidenavType(type) {
    if (!sidebar) return;
    sidebar.classList.remove('sidenav-white', 'sidenav-transparent');
    [sidenavDarkBtn, sidenavTransparentBtn, sidenavWhiteBtn].forEach(btn => btn?.classList.remove('active'));

    if (type === 'white') {
      sidebar.classList.add('sidenav-white');
      sidenavWhiteBtn?.classList.add('active');
    } else if (type === 'transparent') {
      sidebar.classList.add('sidenav-transparent');
      sidenavTransparentBtn?.classList.add('active');
    } else {
      sidenavDarkBtn?.classList.add('active');
    }
  }

  if (sidenavDarkBtn) sidenavDarkBtn.addEventListener('click', () => setSidenavType('dark'));
  if (sidenavTransparentBtn) sidenavTransparentBtn.addEventListener('click', () => setSidenavType('transparent'));
  if (sidenavWhiteBtn) sidenavWhiteBtn.addEventListener('click', () => setSidenavType('white'));

  // --------------------------------------------------------------------------
  // 6. Configurator: Dark / Light Mode Switch
  // --------------------------------------------------------------------------
  const darkModeSwitch = document.getElementById('darkModeSwitch');
  if (darkModeSwitch) {
    darkModeSwitch.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add('dark-version');
      } else {
        document.body.classList.remove('dark-version');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 7. Time Filter Pills (Today, Week, Month, Year) & Dynamic KPIs
  // --------------------------------------------------------------------------
  const filterPills = document.querySelectorAll('.btn-pill');
  const kpiMoney = document.getElementById('kpiMoney');
  const kpiUsers = document.getElementById('kpiUsers');
  const kpiClients = document.getElementById('kpiClients');
  const kpiSales = document.getElementById('kpiSales');

  const kpiDatasets = {
    today: { money: '$53k', users: '2,300', clients: '3,462', sales: '$103,430' },
    week: { money: '$142k', users: '9,840', clients: '5,120', sales: '$294,800' },
    month: { money: '$480k', users: '34,200', clients: '18,400', sales: '$890,200' },
    year: { money: '$2.4M', users: '185,000', clients: '92,400', sales: '$4,120,500' }
  };

  filterPills.forEach(pill => {
    pill.addEventListener('click', function () {
      filterPills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');

      const range = this.getAttribute('data-range');
      if (kpiDatasets[range]) {
        if (kpiMoney) kpiMoney.textContent = kpiDatasets[range].money;
        if (kpiUsers) kpiUsers.textContent = kpiDatasets[range].users;
        if (kpiClients) kpiClients.textContent = kpiDatasets[range].clients;
        if (kpiSales) kpiSales.textContent = kpiDatasets[range].sales;
      }

      if (typeof updateChartsForRange === 'function') {
        updateChartsForRange(range);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 8. Live Search Filter for Projects
  // --------------------------------------------------------------------------
  const searchInput = document.getElementById('projectSearchInput');
  const projectsTable = document.getElementById('projectsTable');

  if (searchInput && projectsTable) {
    searchInput.addEventListener('input', function (e) {
      const query = e.target.value.toLowerCase().trim();
      const rows = projectsTable.querySelectorAll('tbody tr');

      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // --------------------------------------------------------------------------
  // 9. Interactive Project Details Modal
  // --------------------------------------------------------------------------
  const projectDetailsModalEl = document.getElementById('projectDetailsModal');
  const projectModal = projectDetailsModalEl ? new bootstrap.Modal(projectDetailsModalEl) : null;

  document.addEventListener('click', function (e) {
    const row = e.target.closest('.project-row');
    const viewBtn = e.target.closest('.view-project-btn');

    if (viewBtn || (row && !e.target.closest('button') && !e.target.closest('a'))) {
      const targetRow = row || viewBtn.closest('.project-row');
      if (!targetRow || !projectModal) return;

      const title = targetRow.getAttribute('data-project');
      const budget = targetRow.getAttribute('data-budget');
      const percent = targetRow.getAttribute('data-completion');
      const status = targetRow.getAttribute('data-status');

      document.getElementById('modalProjectTitle').textContent = title;
      document.getElementById('modalProjectBudget').textContent = budget;
      document.getElementById('modalProjectPercent').textContent = `${percent}%`;
      document.getElementById('modalProjectStatus').textContent = status;

      projectModal.show();
    }
  });

  // --------------------------------------------------------------------------
  // 10. Interactive Order Details Modal
  // --------------------------------------------------------------------------
  const orderDetailsModalEl = document.getElementById('orderDetailsModal');
  const orderModal = orderDetailsModalEl ? new bootstrap.Modal(orderDetailsModalEl) : null;

  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('click', function () {
      if (!orderModal) return;
      const title = this.getAttribute('data-title') || this.querySelector('.timeline-title').textContent;
      const time = this.getAttribute('data-time') || this.querySelector('.timeline-time').textContent;
      const desc = this.getAttribute('data-desc') || 'Transaction verified through authorized payment provider.';

      document.getElementById('orderModalTitle').textContent = title;
      document.getElementById('orderModalTime').textContent = time;
      document.getElementById('orderModalDesc').textContent = desc;

      orderModal.show();
    });
  });

  // --------------------------------------------------------------------------
  // 11. Add New Project Form Handler
  // --------------------------------------------------------------------------
  const newProjectForm = document.getElementById('newProjectForm');
  const inputProjCompletion = document.getElementById('inputProjCompletion');
  const rangeVal = document.getElementById('rangeVal');

  if (inputProjCompletion && rangeVal) {
    inputProjCompletion.addEventListener('input', (e) => {
      rangeVal.textContent = e.target.value;
    });
  }

  if (newProjectForm) {
    newProjectForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('inputProjName').value;
      const budget = document.getElementById('inputProjBudget').value;
      const iconClasses = document.getElementById('inputProjIcon').value.split(' ');
      const bgClass = iconClasses[0];
      const iconClass = iconClasses.slice(1).join(' ');
      const completion = document.getElementById('inputProjCompletion').value;

      const tbody = projectsTable.querySelector('tbody');
      const tr = document.createElement('tr');
      tr.className = 'project-row';
      tr.setAttribute('data-project', name);
      tr.setAttribute('data-budget', budget);
      tr.setAttribute('data-completion', completion);
      tr.setAttribute('data-status', completion == 100 ? 'Completed' : 'In Progress');

      tr.innerHTML = `
        <td>
          <div class="d-flex px-2 py-1 align-items-center">
            <div class="company-icon-badge ${bgClass}">
              <i class="${iconClass}"></i>
            </div>
            <div class="d-flex flex-column justify-content-center ms-3">
              <h6 class="mb-0 text-sm font-weight-bold project-name">${name}</h6>
              <span class="text-xxs text-muted">Newly added project</span>
            </div>
          </div>
        </td>
        <td>
          <div class="avatar-group mt-2">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80" class="avatar avatar-xs rounded-circle" alt="User">
          </div>
        </td>
        <td class="align-middle text-center text-sm">
          <span class="text-xs font-weight-bold text-dark">${budget}</span>
        </td>
        <td class="align-middle">
          <div class="d-flex align-items-center justify-content-center">
            <span class="me-2 text-xs font-weight-bold">${completion}%</span>
            <div class="progress progress-sm flex-grow-1" style="max-width: 100px;">
              <div class="progress-bar ${completion == 100 ? 'bg-success' : 'bg-info'}" role="progressbar" style="width: ${completion}%"></div>
            </div>
          </div>
        </td>
        <td class="align-middle text-end pe-3">
          <button class="btn btn-sm btn-icon-ghost view-project-btn" title="View Details">
            <i class="fa-regular fa-eye"></i>
          </button>
        </td>
      `;

      tbody.insertBefore(tr, tbody.firstChild);

      // Close modal
      const modalInstance = bootstrap.Modal.getInstance(document.getElementById('newProjectModal'));
      if (modalInstance) modalInstance.hide();
      newProjectForm.reset();
      rangeVal.textContent = '15';
    });
  }

  // --------------------------------------------------------------------------
  // 12. CSV Export for Projects
  // --------------------------------------------------------------------------
  const exportCsvBtn = document.getElementById('exportCsvBtn');
  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', function (e) {
      e.preventDefault();
      let csvContent = 'data:text/csv;charset=utf-8,Project,Budget,Completion\n';
      const rows = projectsTable.querySelectorAll('tbody tr');
      rows.forEach(r => {
        const p = r.getAttribute('data-project') || '';
        const b = r.getAttribute('data-budget') || '';
        const c = r.getAttribute('data-completion') || '';
        csvContent += `"${p}","${b}","${c}%"\n`;
      });
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'material_dashboard_projects.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // Filter 100% completed
  const filterCompleteBtn = document.getElementById('filterCompleteBtn');
  const showAllProjectsBtn = document.getElementById('showAllProjectsBtn');

  if (filterCompleteBtn) {
    filterCompleteBtn.addEventListener('click', function (e) {
      e.preventDefault();
      projectsTable.querySelectorAll('tbody tr').forEach(r => {
        r.style.display = r.getAttribute('data-completion') === '100' ? '' : 'none';
      });
    });
  }

  if (showAllProjectsBtn) {
    showAllProjectsBtn.addEventListener('click', function (e) {
      e.preventDefault();
      projectsTable.querySelectorAll('tbody tr').forEach(r => {
        r.style.display = '';
      });
    });
  }

  // --------------------------------------------------------------------------
  // 13. Refresh Orders feed animation
  // --------------------------------------------------------------------------
  const refreshOrdersBtn = document.getElementById('refreshOrdersBtn');
  if (refreshOrdersBtn) {
    refreshOrdersBtn.addEventListener('click', function () {
      const icon = this.querySelector('i');
      icon.classList.add('fa-spin');
      setTimeout(() => {
        icon.classList.remove('fa-spin');
      }, 700);
    });
  }
});
