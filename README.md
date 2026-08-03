# Notes

## Tailwind classname order

1. **Position**   absolute fixed relative | top right bottom left | z-index
2. **Display / Layout** block flex grid inline-flex
3. **Flex/Grid** items-* justify-* gap-*
4. **Size** w-* h-* size-*
5. **Spacing** p-* m-*
6. **Border** rounded-* border-*
7. **Background**
8. **Typography**
9. **Effects** shadow opacity
10. **Transform** rotate scale translate
11. **Transition / Animation**
12. **State** hover: | focus: | active: | disabled: | dark:

```css
className="
    absolute top-3 right-4 z-20
    flex items-center justify-center
    size-10
    rounded-md border
    bg-background
    text-foreground
    shadow-sm
    transition-all duration-300
    hover:bg-accent
    focus-visible:ring-2
    disabled:pointer-events-none disabled:opacity-50
"
```
