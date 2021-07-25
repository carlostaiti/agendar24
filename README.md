QCalendar (Vue Plugin, UMD and Quasar App Extension)
===

> If you are looking for QCalendar that works with Vue 3, head over to the [new docs](https://qcalendar.netlify.app/).

![@quasar/quasar-ui-qcalendar](https://img.shields.io/npm/v/@quasar/quasar-ui-qcalendar.svg?label=@quasar/quasar-ui-qcalendar)
![@quasar/quasar-app-extension-qcalendar](https://img.shields.io/npm/v/@quasar/quasar-app-extension-qcalendar.svg?label=@quasar/quasar-app-extension-qcalendar)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quasarframework/quasar-ui-qcalendar.svg)]()
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/quasarframework/quasar-ui-qcalendar.svg)]()

## Everything you need for a complete Calendar solution.

QCalendar is a [Quasar](https://quasar.dev) component. It is a powerful calendar that plugs right into your Quasar application and allows for viewing of **day** (1-6 days), **week**, **monthly**, **scheduler** and **agenda** views. Painstaking care has been given to make almost every aspect of QCalendar configurable and/or modifiable in some way and control given to the developer.

---

## Important Release Notes

**v3.2.0**: New property for interval-based calendars: `time-clicks-clamped`. What this does, is instead of returning a timestamp with the exact time of the click position, it returns the timestamp of the interval. If normally, your timestamp would have a time of **13:20**, this property makes it return **13:00**. This is also based on your settings of `interval-minutes`. If your `interval-minutes` is set to **15**, then the same click above would return a timestamp with time set to **13:15**.

**Day** and **Week** calendars now have the ability to toggle selected intervals or a range of selected intervals (even across multiple days) with properties `selected-dates` and `selected-start-end-dates`. These properties not only need the date (like the month view uses), but also the time (use the Timestamp exported method `getDateTime`). See the examples to learn how to do this.

**Timestamp** has a new exported method: `getDateTimeIdentifier` which is a convenience method that combines `getDayIdentifier` and `getTimeIdentifier`.

You can find out more information [here](https://github.com/quasarframework/quasar-ui-qcalendar/releases/tag/v3.2.0).

**v3.0.0**: As QCalendar strives to be the most exstensible calendar available, to be consistent with this ideology, we had to make a LOT of changes.

Among other updates, several things have become "native" for QCalendar:
1. The largest overhaul was introducing css vars to allow users the ability to customize QCalendar
2. QCalendar was compared to dozens of other calendars and the look was optimized to be more modern
3. The original theming has been removed. The css vars are 25% faster than the previous theming code
4. You no longer need to provide a `.q-active-date` class of your own. You can now change the active date colors via css vars
5. You no longer need to hook into the styles properties (ie: interval-style) to change the way disabled days look. You can now change the disable date colors via css vars
6. 'activeDate' is now included in a lot of the scoped slots and events
7. On interval-based calendars, when using the property "interval-minutes", those parts of the calendar are now called "interval sections" and can be changed via css vars. The default is to now have a "dashed" look, while at the main interval time, the lines are solid. Again, all changeable via css vars
8. You no longer have to provide `.q-range-first`, `.q-range-last` and `.q-range` classes via `day-class` property for range selection. It's all built-in now.
9. All deprecated slots and events were removed

Also, check out the new [Theme Builder](https://quasarframework.github.io/quasar-ui-qcalendar/theme-builder) in the docs.

You can find out more information [here](https://github.com/quasarframework/quasar-ui-qcalendar/releases/tag/v3.0.0).

**v2.4.0**: New slots and events added. Current event system is deprecated, but still available until the next major version is released. To see the deprecated events in the **QCalendar API** (at bottom of the page [here](https://quasarframework.github.io/quasar-ui-qcalendar/docs)), select the hamburger menu, then select **Show deprecated**. You can find out more information [here](https://github.com/quasarframework/quasar-ui-qcalendar/releases/tag/v2.4.0).


**v2.2.0**: Please be aware of breaking changes in events and scoped slotted data. You can find out more information [here](https://github.com/quasarframework/quasar-ui-qcalendar/releases/tag/v2.2.0).

---

[Live Demo](https://quasarframework.github.io/quasar-ui-qcalendar/docs) - **live docs, demo and examples**

---

**Month view with events**

![QCalendar example month view](https://raw.githubusercontent.com/quasarframework/quasar-ui-qcalendar/dev/demo/public/qcalendar-month-view.png)

**Planner example**

![QCalendar example agenda view - planner](https://raw.githubusercontent.com/quasarframework/quasar-ui-qcalendar/dev/demo/public/qcalendar-agenda-view--planner.png)

**Monthly Mini-mode**

![QCalendar example mini-mode selection](https://raw.githubusercontent.com/quasarframework/quasar-ui-qcalendar/dev/demo/public/q-calendar-month-view-mini-mode-with-selection.png)

**Multi-month selector (mini-mode)**

![QCalendar example multi-month selection](https://raw.githubusercontent.com/quasarframework/quasar-ui-qcalendar/dev/demo/public/qcalendar-month-view-mini-mode-multi-month-selection.png)

**Agenda view with custom content**

![QCalendar example agenda view](https://raw.githubusercontent.com/quasarframework/quasar-ui-qcalendar/dev/demo/public/qcalendar-agenda-view.png)

**Day view with events**

![QCalendar example day view - events](https://raw.githubusercontent.com/quasarframework/quasar-ui-qcalendar/dev/demo/public/qcalendar-day-view.png)

**Resource view with events**

![QCalendar example resource view - events](https://raw.githubusercontent.com/quasarframework/quasar-ui-qcalendar/dev/demo/public/qcalendar-resource-view.png)

**Scheduler view**

![QCalendar example scheduler view](https://raw.githubusercontent.com/quasarframework/quasar-ui-qcalendar/dev/demo/public/qcalendar-scheduler-view.png)

Including support for locales, optional theming, 1st day Monday, 5-day work weeks, work week numbers, selected days, disabled days, day of year...

...and many more!

# Structure

* [/ui](ui) - standalone npm package (go here for more information)
* [/app-extension](app-extension) - Quasar app extension
* [/demo](demo) - sources for docs, demo and examples project
* [live demo](https://quasarframework.github.io/quasar-ui-qcalendar/docs) - **live docs, demo and examples**

# Demo Workflow
If you fork or download this project, make sure you have the Quasar CLI globally installed:

```
$ npm i -g @quasar/cli
```

The workflow to build the demo, on a fresh project, is as follows:
```
$ cd ui
$ yarn
$ yarn build
$ cd ../demo
$ yarn
$ quasar dev
```

# Codepen
[UMD example on Codepen](https://codepen.io/Hawkeye64/pen/RwwwKQL)

# Donate
If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

# License
MIT (c) Jeff Galbraith <jeff@quasar.dev>
