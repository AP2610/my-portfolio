# Equal Height Content-Aligned Cards

This recipe demonstrates how to create a grid of cards with equal heights and aligned content, regardless of whether they contain images or not.

## Problem

When creating a grid of cards where some cards have images and others don't, content alignment becomes inconsistent. Cards without images tend to have their content pushed to the top, while cards with images have their content below the image.

## Solution

Use Flexbox to create a consistent layout where:

- Cards maintain equal height in a grid
- Content sections align across all cards
- Buttons stick to the bottom of each card
- Images, when present, maintain consistent aspect ratio

## Note

Please see recipes.md

I created the recipe because this was the 500th time I had to do this and in the future, I will probably have to do it 500 more times. Also note, there is some styling which has nothing to do with the recipe.

### Code Example

```tsx
<article className="flex h-full flex-col overflow-hidden rounded-lg border-2 border-black-600 bg-black-600/30 shadow-md transition-transform hover:scale-[1.02] hover:transform">
  {image && <MyImage src={image} alt={`${company} project`} containerClasses="aspect-video" />}

  <div className="flex flex-grow flex-col space-y-4 p-6">
    <h2 className="text-2xl text-blue">{company}</h2>
    <p className="text-xl font-medium">{role}</p>

    <div className="flex flex-grow flex-col">
      <p className={`${clsx({ 'line-clamp-3': image })} mb-4`}>{situation}</p>

      <Button isLinkButton href={`/projects/${slug}`} variant="blue-secondary" className="mt-auto">
        Read More
      </Button>
    </div>
  </div>
</article>
```

## Key Concepts

1. **Card Container**

   - `h-full`: Ensures full height within grid
   - `flex flex-col`: Creates vertical flex container
   - `overflow-hidden`: Contains child elements

2. **Content Container**

   - `flex-grow`: Expands to fill available space
   - `flex flex-col`: Enables vertical content arrangement
   - Nested flex container for content/button alignment

3. **Button Alignment**
   - Uses `mt-auto` so its pushed to the bottom

## Use Cases

- Project portfolios
- Blog post cards
- Product listings
- Team member profiles
- Feature showcases

## Browser Support

This solution uses modern CSS Flexbox properties, which are supported in all modern browsers:

- Chrome 84+
- Firefox 81+
- Safari 14+
- Edge 84+

## Notes

- The `line-clamp-3` class requires Tailwind CSS line-clamp plugin
- Consider adding fallbacks for older browsers if needed
- Adjust spacing values (`mt-6`, `p-6`, etc.) to match your design system
