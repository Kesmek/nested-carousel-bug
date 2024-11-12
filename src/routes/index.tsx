import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Carousel, Modal } from "@qwik-ui/headless";

const colors = ["red", "blue", "green", "yellow", "purple", "orange", "teal"];

export default component$(() => {
  const selectedIndex = useSignal(0);

  const incrementIndex$ = $(() => {
    selectedIndex.value++;
  });

  const decrementIndex$ = $(() => {
    if (selectedIndex.value > 0) {
      selectedIndex.value--;
    }
  });

  return (
    <>
      <Modal.Root>
        <Modal.Trigger>Show Carousel</Modal.Trigger>
        <div>Carousel Selected index: {selectedIndex.value}</div>
        <div>
          <button onClick$={decrementIndex$}>-</button>
          <button onClick$={incrementIndex$}>+</button>
        </div>
        <Modal.Panel>
          <Carousel.Root
            bind:selectedIndex={selectedIndex}
            startIndex={selectedIndex.value}
          >
            <div>
              <Carousel.Previous>Previous</Carousel.Previous>
              <Carousel.Next>Next</Carousel.Next>
            </div>
            <Carousel.Scroller>
              {colors.map((color, index) => (
                <Carousel.Slide
                  key={color}
                >{`Color: ${color}, Index: ${index}`}</Carousel.Slide>
              ))}
            </Carousel.Scroller>
          </Carousel.Root>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
