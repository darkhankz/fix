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
const draftStatus = document.querySelector("#draftStatus");
const photoDraftNote = document.querySelector("#photoDraftNote");
const pasteZone = document.querySelector("#pasteZone");
const pasteEmpty = document.querySelector("#pasteEmpty");
const photoPreview = document.querySelector("#photoPreview");
const clearPhotoButton = document.querySelector("#clearPhotoButton");
const imageViewer = document.querySelector("#imageViewer");
const imageViewerStage = document.querySelector("#imageViewerStage");
const imageViewerImg = document.querySelector("#imageViewerImg");
const magnifierLens = document.querySelector("#magnifierLens");
const closeImageViewerButton = document.querySelector("#closeImageViewerButton");
const submitButton = document.querySelector("#submitButton");
const submitStatus = document.querySelector("#submitStatus");
const operatorDefaultStatus = document.querySelector("#operatorDefaultStatus");
const operatorTodayCount = document.querySelector("#operatorTodayCount");
const regulationErrorCheckboxes = [...document.querySelectorAll('input[name="regulationError"]')];
const appsScriptUrl = "https://script.google.com/macros/s/AKfycbwOmWkTG6dcepYnOeb-Kxs-V5g0qZRBpto3Ftc-91BpsduDbIjGWAfRb3Z4y0gytwY0/exec";
const submissionSecret = "test-secret-123";
const draftKey = "okk-secondary-franchise-draft-v1";
const operatorDefaultKey = "okk-secondary-franchise-default-operator-v1";
const operatorStatsKey = "okk-secondary-franchise-operator-stats-v1";
let operatorCountRequestId = 0;
let restoredPhotoName = "";
let isRestoringDraft = false;
let wasSubmitted = false;
let pastedPhotoFile = null;
let photoPreviewUrl = "";

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

function getTodayKey() {
  return new Date().toLocaleDateString("sv-SE");
}

function readOperatorStats() {
  try {
    return JSON.parse(localStorage.getItem(operatorStatsKey)) || {};
  } catch (error) {
    localStorage.removeItem(operatorStatsKey);
    return {};
  }
}

function getOperatorTodayCount(operator = fields.operator.value) {
  if (!operator) return 0;
  const stats = readOperatorStats();
  return stats[getTodayKey()]?.[operator] || 0;
}

function requestAppsScriptJsonp(params, timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const callbackName = `okkCallback_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    const script = document.createElement("script");
    const url = new URL(appsScriptUrl);
    const timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error("Apps Script request timeout"));
    }, timeoutMs);

    function cleanup() {
      window.clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = (data) => {
      cleanup();
      resolve(data);
    };

    Object.entries({
      ...params,
      callback: callbackName,
      _: Date.now(),
    }).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    script.onerror = () => {
      cleanup();
      reject(new Error("Apps Script request failed"));
    };

    script.src = url.toString();
    document.body.append(script);
  });
}

function updateOperatorMemoryUi() {
  const operator = fields.operator.value;

  if (operatorDefaultStatus) {
    operatorDefaultStatus.textContent = operator
      ? `${operator} будет выбран по умолчанию`
      : "Оператор запомнится после выбора";
  }

  if (operatorTodayCount) {
    operatorTodayCount.textContent = operator ? `Сегодня: ${getOperatorTodayCount(operator)}` : "Сегодня: 0";
  }
}

async function refreshOperatorTodayCount({ quiet = false } = {}) {
  const operator = fields.operator.value;
  const requestId = ++operatorCountRequestId;

  if (!operator) {
    updateOperatorMemoryUi();
    return;
  }

  if (operatorTodayCount && !quiet) {
    operatorTodayCount.textContent = "Считаю...";
  }

  try {
    const data = await requestAppsScriptJsonp({
      action: "getTodayCount",
      secret: submissionSecret,
      operator,
    });

    if (requestId !== operatorCountRequestId) return;

    if (!data || data.ok !== true || typeof data.todayCount !== "number") {
      throw new Error("Invalid counter response");
    }

    if (operatorTodayCount) {
      operatorTodayCount.textContent = `Сегодня: ${data.todayCount}`;
      operatorTodayCount.title = "Счетчик из Google Таблицы";
    }
  } catch (error) {
    if (requestId !== operatorCountRequestId) return;
    updateOperatorMemoryUi();
    if (operatorTodayCount) {
      operatorTodayCount.title = "Пока показан локальный счетчик. Добавьте getTodayCount в Apps Script.";
    }
  }
}

function saveOperatorDefault() {
  const operator = fields.operator.value;

  if (operator) {
    localStorage.setItem(operatorDefaultKey, operator);
  } else {
    localStorage.removeItem(operatorDefaultKey);
  }

  updateOperatorMemoryUi();
  refreshOperatorTodayCount({ quiet: false });
}

function restoreOperatorDefault() {
  if (fields.operator.value) {
    updateOperatorMemoryUi();
    return;
  }

  const savedOperator = localStorage.getItem(operatorDefaultKey);
  if (!savedOperator) {
    updateOperatorMemoryUi();
    return;
  }

  const hasOption = [...fields.operator.options].some((option) => option.value === savedOperator);
  if (hasOption) fields.operator.value = savedOperator;
  updateOperatorMemoryUi();
}

function incrementOperatorTodayCount(operator) {
  if (!operator) return;

  const todayKey = getTodayKey();
  const stats = readOperatorStats();
  stats[todayKey] = stats[todayKey] || {};
  stats[todayKey][operator] = (stats[todayKey][operator] || 0) + 1;
  localStorage.setItem(operatorStatsKey, JSON.stringify(stats));
  updateOperatorMemoryUi();
}

function getSelectedRegulationErrors() {
  return regulationErrorCheckboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
}

function setSelectedRegulationErrors(values) {
  regulationErrorCheckboxes.forEach((checkbox) => {
    checkbox.checked = values.includes(checkbox.value);
  });
}

function collectDraft() {
  return {
    operator: fields.operator.value,
    clinic: fields.clinic.value,
    room: fields.room.value,
    formTime: fields.formTime.value,
    employeeName: fields.employeeName.value,
    fixationType: fields.fixationType.value,
    errorCategory: fields.errorCategory.value,
    regulationErrors: getSelectedRegulationErrors(),
    pluses: fields.pluses.value,
    minuses: fields.minuses.value,
    comment: fields.comment.value,
    corridorTalk: fields.corridorTalk.value,
    photoName: getSelectedPhotoFile()?.name || restoredPhotoName,
    savedAt: new Date().toISOString(),
  };
}

function hasDraftData(draft = collectDraft()) {
  return Boolean(
    draft.operator ||
      draft.clinic ||
      draft.room ||
      draft.formTime ||
      draft.employeeName ||
      draft.fixationType ||
      draft.errorCategory ||
      draft.regulationErrors.length ||
      draft.pluses ||
      draft.minuses ||
      draft.comment ||
      draft.corridorTalk ||
      draft.photoName
  );
}

function updateDraftStatus(savedAt) {
  if (!draftStatus) return;

  if (!savedAt) {
    draftStatus.textContent = "Черновик сохраняется автоматически";
    return;
  }

  const savedDate = new Date(savedAt);
  draftStatus.textContent = `Черновик сохранен ${savedDate.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}

function updatePhotoDraftNote() {
  if (!photoDraftNote) return;

  const currentPhotoName = getSelectedPhotoFile()?.name;
  if (currentPhotoName) {
    photoDraftNote.textContent = `Выбран файл: ${currentPhotoName}`;
  } else if (restoredPhotoName) {
    photoDraftNote.textContent = `Ранее был выбран файл: ${restoredPhotoName}. Его нужно выбрать заново перед отправкой.`;
  } else {
    photoDraftNote.textContent = "";
  }
}

function setPhotoPreview(file) {
  if (!file || !photoPreview || !pasteEmpty || !clearPhotoButton) return;

  if (photoPreviewUrl) {
    URL.revokeObjectURL(photoPreviewUrl);
  }

  photoPreviewUrl = URL.createObjectURL(file);
  photoPreview.src = photoPreviewUrl;
  photoPreview.hidden = false;
  pasteEmpty.hidden = true;
  clearPhotoButton.hidden = false;
}

function openImageViewer() {
  if (!photoPreviewUrl || !imageViewer || !imageViewerImg) return;

  imageViewerImg.src = photoPreviewUrl;
  if (magnifierLens) {
    magnifierLens.hidden = true;
    magnifierLens.style.backgroundImage = `url("${photoPreviewUrl}")`;
  }
  imageViewer.hidden = false;
}

function closeImageViewer() {
  if (!imageViewer || !imageViewerImg) return;

  imageViewer.hidden = true;
  imageViewerImg.src = "";
  if (magnifierLens) {
    magnifierLens.hidden = true;
    magnifierLens.style.backgroundImage = "";
  }
}

function updateMagnifier(event) {
  if (!imageViewerImg || !magnifierLens || !photoPreviewUrl) return;

  const rect = imageViewerImg.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
    magnifierLens.hidden = true;
    return;
  }

  const zoom = 2.5;
  const lensSize = magnifierLens.offsetWidth || 190;
  const xPercent = x / rect.width;
  const yPercent = y / rect.height;
  const backgroundWidth = rect.width * zoom;
  const backgroundHeight = rect.height * zoom;
  const backgroundX = xPercent * backgroundWidth - lensSize / 2;
  const backgroundY = yPercent * backgroundHeight - lensSize / 2;

  magnifierLens.hidden = false;
  magnifierLens.style.left = `${event.clientX - imageViewerStage.getBoundingClientRect().left}px`;
  magnifierLens.style.top = `${event.clientY - imageViewerStage.getBoundingClientRect().top}px`;
  magnifierLens.style.backgroundImage = `url("${photoPreviewUrl}")`;
  magnifierLens.style.backgroundSize = `${backgroundWidth}px ${backgroundHeight}px`;
  magnifierLens.style.backgroundPosition = `-${backgroundX}px -${backgroundY}px`;
}

function hideMagnifier() {
  if (magnifierLens) magnifierLens.hidden = true;
}

function clearPhotoPreview(shouldSave = true) {
  pastedPhotoFile = null;

  if (photoPreviewUrl) {
    URL.revokeObjectURL(photoPreviewUrl);
    photoPreviewUrl = "";
  }

  if (photoPreview) {
    photoPreview.src = "";
    photoPreview.hidden = true;
  }

  if (pasteEmpty) pasteEmpty.hidden = false;
  if (clearPhotoButton) clearPhotoButton.hidden = true;
  updatePhotoDraftNote();
  if (shouldSave) saveDraft();
}

function getSelectedPhotoFile() {
  return pastedPhotoFile || fields.photo.files[0] || null;
}

function setPhotoFile(file, source = "file") {
  if (!file || !file.type.startsWith("image/")) {
    showToast("Нужна картинка");
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    showToast("Файл больше 10 MB");
    return;
  }

  pastedPhotoFile = source === "paste" ? file : null;
  restoredPhotoName = "";
  setPhotoPreview(file);
  updatePhotoDraftNote();
  saveDraft();
}

function saveDraft() {
  if (isRestoringDraft) return;
  wasSubmitted = false;

  const draft = collectDraft();
  localStorage.setItem(draftKey, JSON.stringify(draft));
  updateDraftStatus(draft.savedAt);
  updatePhotoDraftNote();
}

function clearDraftAfterSubmit() {
  localStorage.removeItem(draftKey);
  restoredPhotoName = "";
  wasSubmitted = true;
  clearPhotoPreview(false);
  updateDraftStatus();
  updatePhotoDraftNote();
}

function restoreDraft() {
  const rawDraft = localStorage.getItem(draftKey);
  if (!rawDraft) return;

  try {
    const draft = JSON.parse(rawDraft);
    isRestoringDraft = true;
    fields.operator.value = draft.operator || "";
    fields.clinic.value = draft.clinic || "";
    fields.room.value = draft.room || "";
    fields.formTime.value = draft.formTime || "";
    fields.employeeName.value = draft.employeeName || "";
    fields.fixationType.value = draft.fixationType || "";
    fields.errorCategory.value = draft.errorCategory || "";
    fields.pluses.value = draft.pluses || "";
    fields.minuses.value = draft.minuses || "";
    fields.comment.value = draft.comment || "";
    fields.corridorTalk.value = draft.corridorTalk || "";
    restoredPhotoName = draft.photoName || "";
    setSelectedRegulationErrors(draft.regulationErrors || []);
    updateDraftStatus(draft.savedAt);
    updatePhotoDraftNote();
  } catch (error) {
    localStorage.removeItem(draftKey);
  } finally {
    isRestoringDraft = false;
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.includes(",") ? result.split(",")[1] : result);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function validateRequiredFields() {
  const missingFields = [];

  if (!fields.operator.value) missingFields.push("Оператор");
  if (!fields.clinic.value) missingFields.push("Клиника");
  if (!fields.room.value.trim()) missingFields.push("Кабинет");
  if (!fields.formTime.value) missingFields.push("Время");
  if (!fields.employeeName.value.trim()) missingFields.push("Имя сотрудника");
  if (!fields.fixationType.value) missingFields.push("Тип фиксации");
  if (!getSelectedPhotoFile()) missingFields.push("Фотография");
  if (!fields.corridorTalk.value) missingFields.push("Беседа в коридоре");

  return missingFields;
}

async function buildSubmissionPayload() {
  const photoFile = getSelectedPhotoFile();
  const photo = photoFile
    ? {
        name: photoFile.name,
        type: photoFile.type || "image/png",
        base64: await fileToBase64(photoFile),
      }
    : null;

  return {
    formType: "secondary_franchise",
    operator: fields.operator.value,
    clinic: fields.clinic.value,
    room: fields.room.value.trim(),
    time: fields.formTime.value,
    employeeName: fields.employeeName.value.trim(),
    fixationType: fields.fixationType.value,
    errorCategory: fields.errorCategory.value,
    regulationErrors: getSelectedRegulationErrors(),
    pluses: fields.pluses.value.trim(),
    minuses: fields.minuses.value.trim(),
    comment: fields.comment.value.trim(),
    corridorTalk: fields.corridorTalk.value,
    photo,
  };
}

function setSubmitState(message, isLoading = false) {
  if (submitStatus) submitStatus.textContent = message;
  if (submitButton) {
    submitButton.disabled = isLoading;
    submitButton.textContent = isLoading ? "Отправляется..." : "Отправить";
  }
}

async function submitForm() {
  const missingFields = validateRequiredFields();
  if (missingFields.length > 0) {
    const message = `Заполните: ${missingFields.join(", ")}`;
    setSubmitState(message);
    showToast(message);
    return;
  }

  try {
    setSubmitState("Готовлю фото и отправляю данные...", true);
    const payload = await buildSubmissionPayload();

    await fetch(appsScriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        secret: submissionSecret,
        action: "submitFixation",
        payload,
      }),
    });

    incrementOperatorTodayCount(payload.operator);
    window.setTimeout(() => refreshOperatorTodayCount({ quiet: true }), 1200);
    clearDraftAfterSubmit();
    setSubmitState("Отправлено. Проверьте строку в Google Таблице.");
    showToast("Отправлено");
  } catch (error) {
    setSubmitState("Не удалось отправить. Черновик сохранен в браузере.");
    showToast("Ошибка отправки");
  }
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
  saveDraft();
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
submitButton?.addEventListener("click", submitForm);

fields.operator.addEventListener("change", saveOperatorDefault);

fields.photo.addEventListener("change", () => {
  const file = fields.photo.files[0];
  if (file) setPhotoFile(file, "file");
});

document.addEventListener("paste", (event) => {
  const item = [...event.clipboardData.items].find((clipboardItem) =>
    clipboardItem.type.startsWith("image/")
  );

  if (!item) return;

  const file = item.getAsFile();
  if (!file) return;

  const extension = file.type === "image/jpeg" ? "jpg" : "png";
  const screenshot = new File([file], `clipboard-screenshot-${Date.now()}.${extension}`, {
    type: file.type || "image/png",
  });

  setPhotoFile(screenshot, "paste");
  pasteZone?.focus();
  showToast("Скрин вставлен");
});

pasteZone?.addEventListener("dragover", (event) => {
  event.preventDefault();
  pasteZone.classList.add("dragover");
});

pasteZone?.addEventListener("dragleave", () => {
  pasteZone.classList.remove("dragover");
});

pasteZone?.addEventListener("drop", (event) => {
  event.preventDefault();
  pasteZone.classList.remove("dragover");
  const file = [...event.dataTransfer.files].find((droppedFile) => droppedFile.type.startsWith("image/"));
  if (file) setPhotoFile(file, "paste");
});

clearPhotoButton?.addEventListener("click", () => {
  fields.photo.value = "";
  clearPhotoPreview();
});

pasteZone?.addEventListener("click", () => {
  if (photoPreview && !photoPreview.hidden) {
    openImageViewer();
  } else {
    fields.photo.click();
  }
});

photoPreview?.addEventListener("click", (event) => {
  event.stopPropagation();
  openImageViewer();
});

closeImageViewerButton?.addEventListener("click", closeImageViewer);

imageViewer?.addEventListener("click", (event) => {
  if (event.target === imageViewer) closeImageViewer();
});

imageViewerImg?.addEventListener("mousemove", updateMagnifier);
imageViewerImg?.addEventListener("mouseleave", hideMagnifier);
imageViewerStage?.addEventListener("mouseleave", hideMagnifier);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeImageViewer();
});

Object.values(fields).forEach((field) => {
  field.addEventListener("input", () => {
    renderCurrentPreview();
    saveDraft();
  });
  field.addEventListener("change", () => {
    renderCurrentPreview();
    saveDraft();
  });
});

regulationErrorCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", saveDraft);
});

window.addEventListener("beforeunload", (event) => {
  if (wasSubmitted) return;
  if (!hasDraftData()) return;

  event.preventDefault();
  event.returnValue = "";
});

restoreDraft();
restoreOperatorDefault();
refreshOperatorTodayCount({ quiet: true });
render();
