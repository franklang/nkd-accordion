# nkd-accordion
A minimalist ready-to-use and skin HTML5/SASS/jQuery multi-level accordion navigation.

Live demo: https://jsfiddle.net/oatksfjf/2/

## Options

By default, all clicked items remain open until you click them again. Set `closeAll` option to `true` if you want all previously opened items to close when clicking a new one from root level.

```javascript
  $('#myAccordion').nkdAccordion({
    closeAll: true
  });
```

Destroy the accordion. This reverts all accordion elements back to their original state (before calling the accordion).

```javascript
  $('#myAccordion').nkdAccordionDestroy();
```
