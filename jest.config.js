const { defaults } = require('jest-puppeteer');
// const { TextEncoder, TextDecoder } = require('text-encoding-utf-8');
// const textEncoder = '';
// if (global.TextEncoder === undefined) {
//   const encoder = new TextEncoder();
//   const uint8array = encoder.encode('utf - 8');
//   textEncoder = uint8array;
// } https://stacktuts.com/how-to-fix-referenceerror-textencoder-is-not-defined-in-javascript
// const { defaults } = require('jest-config'); // подключем значения по
module.exports = [defaults, {
/* Projects */
// automock: false, /* [boolean] Этот параметр сообщает Jest, что все импортированные модули в ваших тестах должны быть обработаны автоматически. Все модули, используемые в ваших тестах, будут иметь заменяющую реализацию, сохраняя интерфейс API surface.*/
// bail: 0, /* [number | boolean] По умолчанию Jest запускает все тесты и выдает все ошибки в консоль по завершении. Здесь можно использовать опцию bail config, чтобы заставить Jest прекратить выполнение тестов после n сбоев. Установка значения bail в true - это то же самое, что установка значения bail в 1.*/
// cacheDirectory: '/tmp/<path>', /* [string] Каталог, в котором Jest должен хранить свою кэшированную информацию о зависимостях.Jest пытается просканировать ваше дерево зависимостей один раз(предварительно)  и кэшировать его, чтобы облегчить некоторый отток файловой системы, который должен произойти во время выполнения тестов.Этот параметр конфигурации позволяет вам настроить, где Jest хранит данные кэша на диске.*/
// clearMocks: false, /*[boolean] Автоматически очищайте фиктивные вызовы, экземпляры, контексты и результаты перед каждым тестом. Эквивалентно вызову jest.clearAllMocks() перед каждым тестом. Это не устраняет никакой макетной реализации, которая*/
// collectCoverage: false, /*[boolean] Указывает, следует ли собирать информацию о покрытии во время выполнения теста. Поскольку это модифицирует все выполняемые файлы с помощью инструкций по сбору покрытия, это может значительно замедлить ваши тесты.  See the coverageProvider option for more details. https://devdocs.io/jest/configuration#coverageprovider-string */
  // collectCoverageFrom: ['__tests__/__component__/components.test.js',

  // ],// undefined /* [array] Массив шаблонов глобусов, указывающий набор файлов, для которых должна быть собрана информация о покрытии. Если файл соответствует указанному шаблону глобализации, для него будет собрана информация о покрытии, даже если для этого файла не существует тестов и он никогда не требуется в наборе тестов.*/


  // coverageDirectory:undefined, /* [string] Каталог, в который Jest должен выводить свои файлы покрытия. */
  coveragePathIgnorePatterns: ["/node_modules/"], /*[array < string >] Массив строк шаблона регулярного выражения, которые сопоставляются со всеми путями к файлам перед выполнением теста. Если путь к файлу соответствует какому-либо из шаблонов, информация о покрытии будет пропущена. Эти строки шаблона совпадают с полным путем. Используйте строковый токен <rootDir>, чтобы указать путь к корневому каталогу вашего проекта, чтобы предотвратить случайное игнорирование всех ваших файлов в разных средах, которые могут иметь разные корневые каталоги. Пример: ["<rootDir>/build/", "<rootDir>/node_modules/"].*/
  // coverageProvider:'babel', /* [string] Указывает, какого поставщика следует использовать для определения кода покрытия. Допустимые значения - babel (по умолчанию) или v8. */
  // coverageReporters:["clover", "json", "lcov", "text"], /* [array < string | [string, options] >] A list of reporter names that Jest uses when writing coverage reports. Any istanbul reporter can be used. https://devdocs.io/jest/configuration#coveragereporters-arraystring--string-options*/
  // coverageThreshold:undefined, /* [object] Это будет использовано для настройки применения минимального порогового значения для результатов покрытия. Пороговые значения могут быть указаны как глобальные, в виде глобуса, а также как путь к каталогу или файлу. Если пороговые значения не будут соблюдены, jest завершится неудачей. Пороговые значения, указанные в виде положительного числа, принимаются за минимальный требуемый процент. Пороговые значения, указанные в виде отрицательного числа, представляют собой максимально допустимое количество непокрытых объектов. https://devdocs.io/jest/configuration#coveragethreshold-object*/
  // dependencyExtractor: undefined, /* [string] Этот параметр позволяет использовать пользовательский инструмент извлечения зависимостей. Это должен быть модуль узла, который экспортирует объект с помощью функции извлечения. https://devdocs.io/jest/configuration#dependencyextractor-string*/
  // displayName: undefined, /* [string, object] Позволяет печатать этикетку рядом с тестом во время его выполнения. Это становится более полезным в многопроектных репозиториях, где может быть много файлов конфигурации jest. Это визуально указывает, к какому проекту относится тест. https://devdocs.io/jest/configuration#displayname-string-object*/
  // errorOnDeprecated: false, /* [boolean] Заставьте вызывающие устаревшие API-интерфейсы выдавать полезные сообщения об ошибках. Полезно для облегчения процесса обновления. */
  // extensionsToTreatAsEsm:[], /* [array < string >] Jest запустит файлы .mjs и .js с полем типа ближайшего пакета.json, установленным в module, как модули ECMAScript. Если у вас есть какие-либо другие файлы, которые должны запускаться с помощью встроенного ESM, вам необходимо указать здесь их расширение файла. */
  // fakeTimers:{}, /* [object] Поддельные таймеры могут быть полезны, когда фрагмент кода устанавливает длительный тайм-аут, которого мы не хотим ждать в тесте. Дополнительные сведения см. в руководстве по поддельным таймерам и документации по API https://devdocs.io/jest/configuration#faketimers-object*/
  // forceCoverageMatch:[''], /* [array < string >] Тестовые файлы обычно игнорируются при сборе покрытия кода. С помощью этой опции вы можете перезаписать это поведение и включить игнорируемые в противном случае файлы в покрытие кода. https://devdocs.io/jest/configuration#forcecoveragematch-arraystring*/

  // globals:{}, /* [object] Набор глобальных переменных, которые должны быть доступны во всех тестовых средах. https://devdocs.io/jest/configuration#globals-object*/
  // globalSetup: undefined, /* [string] Эта опция позволяет использовать пользовательский модуль глобальной настройки, который должен экспортировать функцию (это может быть синхронизация или асинхронность). Функция будет запущена один раз перед всеми наборами тестов и получит два аргумента: globalConfig от Jest и projectConfig https://devdocs.io/jest/configuration#globalsetup-string*/
  // globalTeardown: undefined, /* [string] Эта опция позволяет использовать пользовательский глобальный модуль разборки, который должен экспортировать функцию (она может быть синхронизированной или асинхронной). Функция будет запущена один раз после завершения всех наборов тестов и получит два аргумента: globalConfig от Jest и projectConfig. https://devdocs.io/jest/configuration#globalteardown-string*/
  // haste: undefined, /* [object] Это будет использовано для настройки поведения jest-haste-map, внутренней системы поиска файлов/кэширования Jest. Поддерживаются следующие параметры: https://devdocs.io/jest/configuration#haste-object */
  // injectGlobals:true, /* [boolean] wВставьте глобальные параметры Jest (expect, test, describe, beforeEach и т.д.) в глобальную среду. Если вы установите для этого значение false, вам следует импортировать из @jest/globals, например https://devdocs.io/jest/configuration#injectglobals-boolean*/

  // maxConcurrency: 5, /* [number] Число, ограничивающее количество тестов, которые разрешено запускать одновременно при использовании test.concurrent. Любой тест, превышающий это ограничение, будет поставлен в очередь и выполнен, как только освободится место. */
  // maxWorkers: [number | string] /* Указывает максимальное количество работников, которые будут созданы рабочим пулом для выполнения тестов. В режиме одиночного запуска по умолчанию используется количество ядер, доступных на вашем компьютере, минус одно для основного потока. В режиме просмотра по умолчанию используется половина доступных ядер на вашем компьютере, чтобы гарантировать, что Jest незаметен и не приводит к остановке вашего компьютера. Возможно, будет полезно настроить это в средах с ограниченными ресурсами, таких как CIs, но значения по умолчанию должны быть адекватными для большинства вариантов использования.*/
  // moduleDirectories: ["node_modules"], /* [array < string >] Массив имен каталогов, подлежащий рекурсивному поиску начиная с местоположения требуемого модуля. Установка этого параметра переопределит значение по умолчанию, если вы хотите по-прежнему выполнять поиск пакетов в node_modules, включите его вместе с любыми другими параметрами:*/
  // moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"], /*[array < string >] Массив расширений файлов, используемых вашими модулями. Если вам требуются модули без указания расширения файла, Jest будет искать эти расширения в порядке слева направо. */
  // moduleNameMapper: null, /* [object < string, string | array < string >>] Сопоставление регулярных выражений с именами модулей или массивами имен модулей, которые позволяют изолировать ресурсы, такие как изображения или стили, с помощью одного модуля. */
  // modulePathIgnorePatterns: ["__e2e__"], /* [array < string >] Массив строк шаблона регулярного выражения, которые сопоставляются со всеми путями к модулю, прежде чем эти пути будут считаться "видимыми" для загрузчика модуля. Если путь к данному модулю соответствует какому-либо из шаблонов, он не будет доступен для require() в тестовой среде.*/
  // modulePaths: [], /* [array < string >] Альтернативный API для установки переменной NODE_PATH env, modulePaths - это массив абсолютных путей к дополнительным местоположениям для поиска при разрешении модулей. Используйте строковый токен <rootDir>, чтобы указать путь к корневому каталогу вашего проекта.*/
  // notify: false, /* [boolean] Активирует собственные уведомления операционной системы о результатах тестирования. Для отображения уведомлений Jest необходим пакет node-notifier, который необходимо установить дополнительно:*/
  // notifyMode: 'failure-change', /* [string] В macOS не забудьте разрешить уведомления из terminal-notifier в разделе Системные настройки > Уведомления и фокус. В Windows node- notifier создает новый элемент меню "Пуск" при первом использовании и не отображает уведомление.Уведомления будут корректно отображаться при последующих запусках. */
  // preset: "just-puppeteer", /*[string] Пресет, который используется в качестве основы для настройки Jest. Пресет должен указывать на модуль npm, у которого есть jest-preset.json, jest-preset.js , файл jest-preset.cjs или jest-preset.mjs в корневом каталоге.*/
  // prettierPath: 'prettier', /* [string] Задает путь к модулю узла prettier, используемому для обновления встроенных моментальных снимков. */
  // projects: undefined, /*[array < string | ProjectConfig >] Когда конфигурация проектов снабжена массивом путей или шаблонов глобальных объектов, Jest запустит тесты во всех указанных проектах одновременно. Это отлично подходит для монорепозиториев или при работе над несколькими проектами одновременно */
  // reporters: undefined, /*  [array < moduleName | [moduleName, options] >] Используйте этот параметр конфигурации, чтобы добавить репортеров в Jest. Это должен быть список имен репортеров, дополнительные параметры могут быть переданы репортеру с помощью формы кортежа: */
  resetMocks: false, /* [boolean]Автоматически сбрасывает макетное состояние перед каждым тестом. Эквивалентно вызову jest.resetAllMocks() перед каждым тестом. Это приведет к удалению любых макетов с их поддельными реализациями, но не восстановит их первоначальную реализацию.*/

  /* Modules */
  // resetModules: false, /* [boolean] Автоматически восстанавливайте макетное состояние и реализацию перед каждым тестом. Эквивалентно вызову jest.restoreAllMocks() перед каждым тестом. Это приведет к удалению любых макетов с их поддельными реализациями и восстановлению их первоначальной реализации.*/
  // resolver: undefined, /* [string] Этот параметр позволяет использовать пользовательский распознаватель. Этот распознаватель должен быть модулем, который экспортирует либо ... */
  // restoreMocks:false, /* [boolean] Автоматически восстанавливайте макетное состояние и реализацию перед каждым тестом. Эквивалентно вызову jest.restoreAllMocks() перед каждым тестом. Это приведет к удалению любых макетов с их поддельными реализациями и восстановлению их первоначальной реализации. */
  // rootDir:'.', /* [string] По умолчанию: корень каталога, содержащего ваш конфигурационный файл Jest или package.json или pwd, если package.json не найден */
  roots: [
    "./__tests__",
  ], /*  [array < string >] Список путей к каталогам, которые Jest должен использовать для поиска файлов. Бывают случаи, когда вы хотите, чтобы Jest выполнял поиск только в одном подкаталоге (например, в случаях, когда у вас есть каталог src / в вашем репозитории), но не допускаете доступа к остальной части репозитория */
  // runner:"jest-runner", /* [string] Этот параметр позволяет вам использовать пользовательский раннер вместо тестового раннера Jest по умолчанию. Примеры бегунов включают: ...*/
  // sandboxInjectedGlobals:undefined, /*[array < string >] Тестовые файлы запускаются внутри виртуальной машины, что замедляет вызовы свойств глобального контекста (например, математика). С помощью этой опции вы можете указать дополнительные свойства, которые будут определены внутри виртуальной машины для более быстрого поиска. */
  // setupFiles: [
  //   "jest-localstorage-mock",
  //   "@testing-library/react",
  //   "./__setups__/setup-jest.js"
  // ], // ["<rootDir>\\src\\jts\\__test__\\__mocks__\\client\.js"], /* [array] Список путей к модулям, которые запускают некоторый код для настройки тестовой среды. Каждый установочный файл будет запущен один раз для каждого тестового файла. Поскольку каждый тест выполняется в своей собственной среде, эти скрипты будут выполнены в среде тестирования перед выполнением setupFilesAfterEnv и перед самим тестовым кодом. */
  // "setupFilesAfterEnv": [textEncoder],
  //() => {
  //   global.TextEncoder = TextEncoder;
  //   global.TextDecoder = TextDecoder;
  // }, //[], /*  [array] Список путей к модулям, которые запускают некоторый код для настройки платформы тестирования перед выполнением каждого тестового файла в наборе. Поскольку setupFiles выполняется до установки тестового фреймворка в среду, этот файл сценария предоставляет вам возможность запустить некоторый код сразу после установки тестового фреймворка в среду, но перед самим тестовым кодом. */
  // slowTestThreshold:5, /* [number] Количество секунд, по истечении которых тест считается медленным и указывается как таковой в результатах. */
  // snapshotFormat: {escapeString: false, printBasicPrototype: false}, /* [object] Позволяет переопределять определенные параметры форматирования моментальных снимков, задокументированные в pretty-format readme, за исключением compareKeys и плагинов. Например, в этой конфигурации средство форматирования моментальных снимков не печатало бы префикс для "Объекта" и "Массива".: ... */
  // snapshotResolver: undefined, /* [string] The path to a module that can resolve test<->snapshot path. This config option lets you customize where Jest stores snapshot files on disk. */
  // snapshotSerializers:[], /* [array < string >] Список путей к модулям сериализатора моментальных снимков, которые Jest должен использовать для тестирования моментальных снимков */
  testEnvironment: 'jsdom', // "node", /* [string] Тестовая среда, которая будет использоваться для тестирования. Среда по умолчанию в Jest - это Node.js окружающая среда. Если вы создаете веб-приложение, вы можете вместо этого использовать браузерную среду через jsdom. */
  // testEnvironmentOptions: { // https://jestjs.io/docs/configuration#testenvironmentoptions-object
  //   html: `<!DOCTYPE html><html><body><div id="root"></div></body></html>`,
  //   url: 'http://localhost:8080/',
  // }, /*  [Object] Параметры тестовой среды, которые будут переданы в testEnvironment. Соответствующие варианты зависят от окружающей среды */
  // testFailureExitCode: 1, /* [number] Шутка с кодом выхода возвращается при сбое теста. */
  // testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ]), /* [array < string >] Шаблоны glob, которые Jest использует для обнаружения тестовых файлов. По умолчанию он ищет файлы .js, .jsx, .ts и .tsxx внутри папок __tests__, а также любые файлы с суффиксом .test или .spec (например Component.test.js или Component.spec.js ). Он также найдет файлы с именем test.js или spec.js */
  testPathIgnorePatterns: [
    "/node_modules/",
    "./__tests__/__e2e__"
  ], /* [array < string >] Массив строк шаблона регулярного выражения, которые сопоставляются со всеми тестовыми путями перед выполнением теста. Если тестовый путь соответствует какому-либо из шаблонов, он будет пропущен. */
  // testRegex: (/__tests__/.*|(/.|/)(test|spec))/.[jt]sx?$, /* [string | array < string >] Шаблон или шаблоны, которые Jest использует для обнаружения тестовых файлов. По умолчанию он ищет файлы .js, .jsx, .ts и .tsxx внутри папок __tests__, а также любые файлы с суффиксом .test или .spec (например Component.test.js или Component.spec.js ). Он также найдет файлы с именем test.js или spec.js . Смотрите также testMatch [array<string>], но обратите внимание, что вы не можете указать оба параметра. */
  // testResultsProcessor: undefined, /* [string] Этот параметр позволяет использовать пользовательский обработчик результатов. Этот процессор должен быть узловым модулем, который экспортирует функцию, ожидающую объект со следующей структурой в качестве первого аргумента, и возвращает его: ...*/
  // testRunner: jest-circus/runner, /* [string] Этот параметр позволяет использовать пользовательский модуль запуска тестов. Значение по умолчанию - jest-circus. Пользовательский модуль запуска тестов можно создать, указав путь к реализации модуля запуска тестов */
  // testSequencer: @jest/test-sequencer, /* [string] Эта опция позволяет вам использовать пользовательский секвенсор вместо Jest по умолчанию. */
  // testTimeout: 5000, /* [number] Время ожидания теста по умолчанию в миллисекундах */
  // transform: {"/.[jt]sx?$": "babel-jest"}, /* [object < string, pathToTransformer | [pathToTransformer, object] >] Отображение из регулярных выражений в пути к преобразователям. Необязательно, кортеж с параметрами конфигурации может быть передан в качестве второго аргумента: {FilePattern: ['путь к трансформатору', {параметры}]}. Например, вот как вы можете настроить babel-jest для поведения, отличного от поведения по умолчанию: {'/.js$': ['babel-jest', {rootMode: 'upward'}]}. */
  // transformIgnorePatterns: ["/node_modules/", "/.pnp/.[^/\/]+$"], /*  [array < string >] Массив строк шаблона регулярного выражения, которые сопоставляются со всеми путями к исходным файлам перед преобразованием. Если путь к файлу соответствует какому-либо из шаблонов, он не будет преобразован. https://devdocs.io/jest/configuration#transformignorepatterns-arraystring */
  // unmockedModulePathPatterns: [], [array < string >] Массив строк шаблона регулярного выражения, которые сопоставляются со всеми модулями до того, как загрузчик модулей автоматически вернет для них макет. Если путь к модулю соответствует любому из шаблонов в этом списке, он не будет автоматически обработан загрузчиком модуля. https://devdocs.io/jest/configuration#unmockedmodulepathpatterns-arraystring */
  // verbose: false, /* [boolean] Indicates whether each individual test should be reported during the run. All errors will also still be shown on the bottom after execution. Note that if there is only one test file being run it will default to true. https://devdocs.io/jest/configuration#verbose-boolean */
  // watchPathIgnorePatterns: [], /* [array < string >] Массив шаблонов регулярных выражений, которые сопоставляются со всеми путями к исходным файлам перед повторным запуском тестов в режиме просмотра. Если путь к файлу соответствует какому-либо из шаблонов, то при обновлении он не вызовет повторного запуска тестов. https://devdocs.io/jest/configuration#watchpathignorepatterns-arraystring */
  // watchPlugins:[], /* [array < string | [string, Object] >] Эта опция позволяет вам использовать пользовательские плагины для просмотра. Подробнее о плагинах watch читайте здесь. https://devdocs.io/jest/configuration#watchplugins-arraystring--string-object */
  // watchman: true, /* [boolean] Следует ли использовать watchman для обхода файлов. https://devdocs.io/jest/configuration#watchman-boolean */
  // workerIdleMemoryLimit: undefined, /* [number | string] Определяет ограничение памяти для рабочих элементов перед их переработкой и в первую очередь является решением этой проблемы; ... https://devdocs.io/jest/configuration#workeridlememorylimit-numberstring */
  // [string] Эта опция разрешает комментарии в файле package.json. Включите текст комментария в качестве значения этого ключа: https://devdocs.io/jest/configuration#-string */ 
}]
/**
 * Jest CLI Options
 * Программа запуска командной строки jest имеет ряд полезных опций. Вы можете запустить jest --help, чтобы просмотреть все доступные параметры. Многие из приведенных ниже опций также можно использовать вместе для выполнения тестов именно так, как вы хотите. Каждый из параметров конфигурации Jest также может быть задан с помощью интерфейса командной строки.
 * https://devdocs.io/jest/cli#--ci
 * Флаги и настройки 
 * https://devdocs.io/jest/cli#reference
 * 
 * Плагины модули 
 * https://devdocs.io/jest/jest-community
 * vscode-jest
 * jest-extended
 * eslint-plugin-jest
 * awesome-jest
 */
