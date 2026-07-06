const categories = [
  {
    id: "appearance",
    name: "Внешний вид",
    templates: [
      {
        id: "ppe-plus",
        targets: ["pluses"],
        type: "join",
        label: "Проводит процедуру",
        prefix: "Проводит процедуру",
        variants: ["в перчатках", "в маске", "в шапочке"],
      },
      {
        id: "full-ppe",
        targets: ["pluses"],
        type: "plain",
        label: "Проводит процедуру в перчатках, маске и шапочке",
      },
      {
        id: "ppe-minus",
        targets: ["minuses"],
        type: "join",
        label: "Проводит процедуру",
        prefix: "Проводит процедуру",
        variants: ["без перчаток", "без маски", "без шапочки"],
      },
      {
        id: "loose-hair",
        targets: ["minuses"],
        type: "plain",
        label: "Проводит процедуру с распущенными волосами",
      },
      {
        id: "headphones",
        targets: ["minuses"],
        type: "plain",
        label: "Проводит процедуру в наушниках",
      },
      {
        id: "mask-half",
        targets: ["minuses"],
        type: "plain",
        label: "Маска не до конца одета",
      },
    ],
  },
  {
    id: "communication",
    name: "Коммуникация",
    templates: [
      {
        id: "discuss-plus",
        targets: ["pluses"],
        type: "join",
        label: "Обсуждает с пациентом",
        prefix: "Обсуждает с пациентом",
        variants: [
          "текущую процедуру",
          "следующую процедуру",
          "препараты",
          "аппараты",
          "личную жизнь",
          "абонемент",
          "аппаратную процедуру",
          "плазму",
          "продукцию",
          "здоровье",
        ],
      },
      {
        id: "dialog-plus",
        targets: ["pluses"],
        type: "join",
        label: "Поддерживает разговор/диалог с пациентом",
        prefix: "Поддерживает разговор/диалог с пациентом",
        variants: [
          "о текущей процедуре",
          "о следующей процедуре",
          "о препарате",
          "об аппарате",
          "о личной жизни",
          "об абонементе",
          "об аппаратной процедуре",
          "о плазме",
          "о продукции",
        ],
      },
      {
        id: "tell-plus",
        targets: ["pluses"],
        type: "join",
        label: "Рассказывает пациенту",
        prefix: "Рассказывает пациенту",
        variants: ["о текущей процедуре", "о следующей процедуре"],
      },
      {
        id: "wellbeing-plus",
        targets: ["pluses"],
        type: "plain",
        label: "Интересуется самочувствием пациента",
      },
      {
        id: "not-tell-minus",
        targets: ["minuses"],
        type: "join",
        label: "Не рассказала",
        prefix: "Не рассказала",
        variants: ["о текущей процедуре", "о следующей процедуре"],
      },
      {
        id: "silent",
        targets: ["minuses"],
        type: "plain",
        label: "Специалист молчит",
      },
      {
        id: "mostly-silent",
        targets: ["minuses"],
        type: "plain",
        label: "Специалист молчит большую часть времени",
      },
      {
        id: "no-contact",
        targets: ["minuses"],
        type: "plain",
        label: "Не контактирует с пациентом",
      },
    ],
  },
  {
    id: "gloves",
    name: "Перчатки и санитария",
    templates: [
      {
        id: "left-gloves",
        targets: ["minuses"],
        type: "plain",
        label: "Специалист вышел из кабинета в перчатках",
      },
      {
        id: "phone-gloves",
        targets: ["minuses"],
        type: "plain",
        label: "Специалист в перчатках пользуется телефоном",
      },
      {
        id: "touch-self",
        targets: ["minuses"],
        type: "join",
        label: "Специалист в перчатках касается",
        prefix: "Специалист в перчатках касается",
        variants: ["волос", "униформы", "лица"],
      },
      {
        id: "touch-items",
        targets: ["minuses"],
        type: "join",
        label: "Специалист в перчатках трогает",
        prefix: "Специалист в перчатках трогает",
        variants: [
          "кран",
          "стульчик",
          "тумбочку",
          "лицо",
          "свои волосы",
          "волосы пациента",
          "карту пациента",
          "телефон",
          "лампу",
        ],
      },
      {
        id: "move-item-gloves",
        targets: ["minuses"],
        type: "join",
        label: "В перчатках передвигает",
        prefix: "В перчатках передвигает",
        variants: ["аппарат", "тумбочку"],
      },
      {
        id: "card-gloves",
        targets: ["minuses"],
        type: "plain",
        label: "Специалист заполняет карту пациента в перчатках",
      },
      {
        id: "floor-items",
        targets: ["minuses"],
        type: "join",
        label: "В перчатках поднимает с пола",
        prefix: "В перчатках поднимает с пола",
        variants: ["салфетки", "другие предметы"],
      },
      {
        id: "floor-gloves",
        targets: ["minuses"],
        type: "plain",
        label: "Поднимает с пола перчатки",
      },
      {
        id: "dirty-procedure",
        targets: ["minuses"],
        type: "join",
        label: "Проводит процедуру",
        prefix: "",
        variants: [
          "Не обработанными перчатками проводит процедуру",
          "Не обработанными руками проводит процедуру",
        ],
      },
      {
        id: "dirty-face",
        targets: ["minuses"],
        type: "plain",
        label: "Необработанными руками трогает лицо пациента",
      },
      {
        id: "patient-hair",
        targets: ["minuses"],
        type: "plain",
        label: "Коснулась волос пациента, когда надевала шапочку",
      },
    ],
  },
  {
    id: "process",
    name: "Процесс",
    templates: [
      {
        id: "absent",
        targets: ["minuses"],
        type: "plain",
        label: "Специалист отсутствует в кабинете",
      },
      {
        id: "periodically-out",
        targets: ["minuses"],
        type: "plain",
        label: "Периодически выходит из кабинета",
      },
      {
        id: "distracted",
        targets: ["minuses"],
        type: "plain",
        label: "Отвлекается на другого специалиста",
      },
      {
        id: "mirror",
        targets: ["minuses"],
        type: "join",
        label: "Не отработала зеркало",
        prefix: "Не отработала",
        variants: ["первое зеркало", "второе зеркало"],
      },
      {
        id: "dropped-device",
        targets: ["minuses"],
        type: "plain",
        label: "Специалист уронил аппарат",
      },
      {
        id: "patient-mirror",
        targets: ["minuses"],
        type: "plain",
        label: "Пациент сам подошел к зеркалу",
      },
    ],
  },
];

const fields = {
  operator: document.querySelector("#operator"),
  clinic: document.querySelector("#clinic"),
  room: document.querySelector("#room"),
  formTime: document.querySelector("#formTime"),
  employeeName: document.querySelector("#employeeName"),
  fixationType: document.querySelector("#fixationType"),
  errorCategory: document.querySelector("#errorCategory"),
  pluses: document.querySelector("#pluses"),
  minuses: document.querySelector("#minuses"),
  photo: document.querySelector("#photo"),
  comment: document.querySelector("#comment"),
  corridorTalk: document.querySelector("#corridorTalk"),
};

const state = {
  activeCategoryId: categories[0].id,
  selected: new Map(),
  targetFieldId: "minuses",
};

const templateDrawer = document.querySelector("#templateDrawer");
const drawerTitle = document.querySelector("#drawerTitle");
const categoryTabs = document.querySelector("#categoryTabs");
const templateList = document.querySelector("#templateList");
const currentPreview = document.querySelector("#currentPreview");
const toast = document.querySelector("#toast");
const regulationErrorCheckboxes = [...document.querySelectorAll('input[name="regulationError"]')];

function getVisibleTemplates(category) {
  return category.templates.filter((template) => template.targets.includes(state.targetFieldId));
}

function getVisibleCategories() {
  return categories.filter((category) => getVisibleTemplates(category).length > 0);
}

function ensureActiveCategory() {
  const visibleCategories = getVisibleCategories();
  const hasActiveCategory = visibleCategories.some((category) => category.id === state.activeCategoryId);

  if (!hasActiveCategory && visibleCategories.length > 0) {
    state.activeCategoryId = visibleCategories[0].id;
  }
}

function findTemplate(templateId) {
  for (const category of categories) {
    const template = category.templates.find((item) => item.id === templateId);
    if (template) return template;
  }
  return null;
}

function buildTemplateText(template, selectedValues) {
  if (template.type === "plain") return template.label;
  if (!selectedValues || selectedValues.length === 0) return "";
  if (!template.prefix) return selectedValues.join(", ");
  return `${template.prefix} ${selectedValues.join(", ")}`;
}

function getCurrentParts() {
  const parts = [];
  state.selected.forEach((values, templateId) => {
    const template = findTemplate(templateId);
    const text = buildTemplateText(template, values);
    if (text) parts.push(text);
  });
  return parts;
}

function buildCurrentLine() {
  const parts = getCurrentParts();
  if (parts.length === 0) return "";
  return parts.join("\n");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function renderCategories() {
  categoryTabs.innerHTML = "";
  getVisibleCategories().forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-button";
    button.textContent = category.name;
    button.classList.toggle("active", category.id === state.activeCategoryId);
    button.addEventListener("click", () => {
      state.activeCategoryId = category.id;
      render();
    });
    categoryTabs.append(button);
  });
}

function renderTemplates() {
  const category = categories.find((item) => item.id === state.activeCategoryId);
  templateList.innerHTML = "";

  if (!category) return;

  getVisibleTemplates(category).forEach((template) => {
    const item = document.createElement("article");
    item.className = "template-item";

    const main = document.createElement("div");
    main.className = "template-main";

    const title = document.createElement("p");
    title.className = "template-title";
    title.textContent = template.label;

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "primary-button add-template";
    addButton.textContent = "+";
    addButton.title = "Выбрать шаблон";
    addButton.addEventListener("click", () => addTemplate(template));

    main.append(title, addButton);
    item.append(main);

    if (template.type === "join") {
      const row = document.createElement("div");
      row.className = "variant-row";

      template.variants.forEach((variant) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "chip-button";
        chip.textContent = variant;
        chip.classList.toggle("selected", state.selected.get(template.id)?.includes(variant));
        chip.addEventListener("click", () => toggleVariant(template, variant));
        row.append(chip);
      });

      item.append(row);
    }

    templateList.append(item);
  });
}

function renderCurrentPreview() {
  const line = buildCurrentLine();

  currentPreview.textContent = line || "Выберите шаблоны ниже";
}

function render() {
  ensureActiveCategory();
  drawerTitle.textContent = state.targetFieldId === "pluses" ? "Добавить в Плюсы" : "Добавить в Минусы";
  renderCategories();
  renderTemplates();
  renderCurrentPreview();
}

function addTemplate(template) {
  if (template.type === "plain") {
    if (state.selected.has(template.id)) {
      state.selected.delete(template.id);
    } else {
      state.selected.set(template.id, [template.label]);
    }
  } else if (!state.selected.has(template.id)) {
    state.selected.set(template.id, [template.variants[0]]);
  }
  render();
}

function toggleVariant(template, variant) {
  const selected = state.selected.get(template.id) || [];
  const next = selected.includes(variant)
    ? selected.filter((item) => item !== variant)
    : [...selected, variant];

  if (next.length === 0) {
    state.selected.delete(template.id);
  } else {
    state.selected.set(template.id, next);
  }
  render();
}

function appendLineToTarget() {
  const line = buildCurrentLine();
  if (!line) {
    showToast("Выберите хотя бы один шаблон");
    return;
  }

  const target = fields[state.targetFieldId];
  target.value = target.value.trim() ? `${target.value.trim()}\n${line}` : line;
  state.selected.clear();
  render();
  target.focus();
  showToast(state.targetFieldId === "pluses" ? "Добавлено в Плюсы" : "Добавлено в Минусы");
}

function openDrawer(targetFieldId) {
  state.targetFieldId = targetFieldId;
  state.selected.clear();
  templateDrawer.hidden = false;
  render();
}

function closeDrawer() {
  templateDrawer.hidden = true;
  state.selected.clear();
  renderCurrentPreview();
}

document.querySelectorAll(".plus-button").forEach((button) => {
  button.addEventListener("click", () => openDrawer(button.dataset.target));
});

document.querySelector("#closeDrawerButton").addEventListener("click", closeDrawer);
document.querySelector("#addToFieldButton").addEventListener("click", appendLineToTarget);

Object.values(fields).forEach((field) => {
  field.addEventListener("input", renderCurrentPreview);
});

render();
