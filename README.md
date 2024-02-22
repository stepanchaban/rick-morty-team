# О проекте

Цель создания проекта - изучение React, Redux Toolkit, TypeScript. Приложение представляет собой энциклопедию персонажей сериала Рик и Морти, данные персонажей берутся из [API](https://github.com/stepanchaban/rick-morty-team/blob/main/src/components/CardList/CardList.tsx).

## Функционал

- Регистрация и авторизация пользователя;
- Отрисовка карточек персонажей;
- Поиск персонажей по имени с показом саджестов;
- Сортировка персонажей по полу и статусу;
- Сохранение истории поиска, её просмотр и удаление;
- Смена темы;
- Просмотр детальной информации по конкретному персонажу.
  
## Задачи проекта

### 1 уровень (необходимый минимум)

##### React
- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми.
- [x] Есть четкое разделение на умные и глупые компоненты.
- [x] Есть рендеринг списков. [Пример](https://github.com/stepanchaban/rick-morty-team/blob/main/src/components/CardList/CardList.tsx)
- [x] Реализована хотя бы одна форма. [Пример](https://github.com/stepanchaban/rick-morty-team/blob/main/src/components/App/common/Form.tsx)
- [x] Есть применение Контекст API. [Пример](https://github.com/stepanchaban/rick-morty-team/blob/main/src/context/ThemeContext.tsx)
- [x] Есть применение предохранителя. [Пример](https://github.com/stepanchaban/rick-morty-team/blob/main/src/components/App/common/Fallback.tsx)
- [x] Есть хотя бы один кастомный хук. [Пример](https://github.com/stepanchaban/rick-morty-team/blob/main/src/components/Search/useAutoComplete.ts) 
- [ ] Хотя бы несколько компонентов используют PropTypes.
- [x] Поиск не должен триггерить много запросов к серверу. [Пример](https://github.com/stepanchaban/rick-morty-team/blob/main/src/components/Search/SearchInput.tsx)
##### Redux
- [x] Используем Modern Redux with Redux Toolkit.
- [x] Используем слайсы. [Пример](https://github.com/stepanchaban/rick-morty-team/blob/main/src/store/slice/formSlice.ts)
- [x] Есть хотя бы одна кастомная мидлвара. [Пример](https://github.com/stepanchaban/rick-morty-team/blob/main/src/store/middleware/getEpisodesMiddleware.ts)
- [x] Используется RTK Query. [Пример](https://github.com/stepanchaban/rick-morty-team/blob/main/src/services/rickMorthyApi.ts)
- [x] Используется Transforming Responses. [Пример](https://github.com/stepanchaban/rick-morty-team/blob/main/src/services/rickMorthyApi.ts)
### 2 уровень (необязательный)
- [ ] Проведена оптимизация приложения.
- [ ] Используются мемоизированные селекторы.
- [ ] Используется нормализованная структура стейта.
- [ ] Подключен storybook и созданы несколько сторисов.
- [x] Использование TypeScript.
