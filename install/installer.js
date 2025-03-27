let supportedOperatingSystems = ['linux', 'macos', 'windows'];
let supportedInterfaces = ['cmdstanpy', 'cmdstanr', 'cmdstan', 'rstan', 'stan.jl'];

const supportedInstallersMap = {
    "cmdstanpy": ["pip", "conda", "github-src"],
    "cmdstanr": ["runiverse", "conda", "github-src"],
    "cmdstan": ["github-rel", "conda", "github-src"],
    "rstan": ["cran", "runiverse", "conda", "github-src"],
    "stan.jl": ["julia-pkg", "github-src"]
};

const osToTitle = {
    "linux": "Linux",
    "macos": "macOS",
    "windows": "Windows",
};

const interfaceToTitle = {
    "cmdstanpy": "CmdStanPy",
    "cmdstanr": "CmdStanR",
    "cmdstan": "CmdStan",
    "rstan": "RStan",
    "stan.jl": "Stan.jl",
};

const installerToTitle = {
    "pip": "pip",
    "conda": "conda",
    "github-src": "GitHub (Source)",
    "github-rel": "GitHub (Release)",
    "cran": "CRAN",
    "runiverse": "R-Universe",
    "julia-pkg": "Pkg.jl",
};

let opts = {
    os: getDefaultSelectedOS(),
    interface: 'cmdstan',
    installer: 'github-src',
};
let supportedInstallers = supportedInstallersMap[opts.interface];


function getDefaultSelectedOS() {
    const platform = navigator.platform.toLowerCase();
    for (const os of supportedOperatingSystems) {
        if (platform.indexOf(os) !== -1) {
            return os;
        }
    }
    return 'linux';
}

function selectedOption(selection, category) {
    const options = document.querySelectorAll('.' + category);

    options.forEach(option => {
        option.classList.remove('selected');
        if (option.id === selection) {
            option.classList.add('selected');
        }
    });
    opts[category] = selection;
}

function updateInstructions() {
    const prereqs = document.querySelectorAll('.prereq');
    prereqs.forEach(prereq => {
        prereq.classList.remove('hidden');
        if (prereq.id !== `prereq-${opts.os}`) {
            prereq.classList.add('hidden');
        }
    });

    const instructions = document.querySelectorAll('.install');
    const key = `install-${opts.interface}-${opts.installer}`;
    let found = false;
    instructions.forEach(instruction => {
        instruction.classList.remove('hidden');
        if (instruction.id !== key) {
            instruction.classList.add('hidden');
        } else {
            found = true;
        }
    });
    if (!found) {
        document.getElementById('install-please-select').classList.remove('hidden');
    }
}

function updateInstallerOptions() {
    // only show supported installers for the selected interface
    supportedInstallers = supportedInstallersMap[opts.interface];
    const gridDiv = document.getElementById('install-grid');
    gridDiv.children[2]?.remove();
    addRow('Installer', supportedInstallers);

    let found = false;
    document.querySelectorAll('.installer').forEach(option => {
        if (option.id === opts.installer) {
            option.classList.add('selected');
            found = true;
        }
    });
    if (!found) {
        opts.installer = '';
    }
}

function updateNeeded(category) {
    if (category === 'os') {
        updateInstallerOptions();
    } else if (category === 'interface') {
        updateInstallerOptions();
    }
    updateInstructions();
}


function getTitle(category, str) {
    if (category === 'interface') {
        return interfaceToTitle[str];
    } else if (category === 'installer') {
        return installerToTitle[str];
    } else if (category === 'os') {
        return osToTitle[str];
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function addRow(label, items) {
    const row = document.createElement('div');
    row.classList.add('flex-grid');

    const category = label.toLowerCase();

    const rowLabel = document.createElement('div');
    rowLabel.classList.add('row-label');
    rowLabel.innerText = label;
    row.appendChild(rowLabel);

    for (const item of items) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('option');
        itemDiv.classList.add('grid-item');
        itemDiv.classList.add('col');
        itemDiv.classList.add(category);
        itemDiv.id = item;
        itemDiv.innerText = getTitle(category, item);

        itemDiv.addEventListener('click', function () {
            if (this.classList.contains('disabled')) {
                return;
            }
            selectedOption(item, category);
            updateNeeded(category);
        });

        row.appendChild(itemDiv);
    }

    const gridDiv = document.getElementById('install-grid');
    gridDiv.appendChild(row);

}

// Draw grid and select defaults
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('install-grid').innerHTML = '';
    addRow('OS', supportedOperatingSystems);
    addRow('Interface', supportedInterfaces);
    addRow('Installer', supportedInstallers);

    updateInstructions();
    document.getElementById(opts.os).classList.add('selected');
    document.getElementById(opts.interface).classList.add('selected');
    document.getElementById(opts.installer).classList.add('selected');
});
