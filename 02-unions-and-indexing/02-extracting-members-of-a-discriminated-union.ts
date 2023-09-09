// The discriminated union "Event"  has a discriminator called "type"
export type Event =
	| {
		type: 'click';
		event: MouseEvent;
	}
	| {
		type: 'focus';
		event: FocusEvent;
	}
	| {
		type: 'keydown';
		event: KeyboardEvent;
	};

// Use the Extract utility type to extract the click event from the Event
// discriminated union.
type ClickEvent = Extract<Event, { type: 'click' }>;
// This works because event is another differentiator.
type AnotherClickEvent = Extract<Event, { event: MouseEvent }>;

// Extract also works with unions.
type Fruit = "apple" | "banana" | "orange";

// Extract the "apple" and "orange" types from the Fruit union.
type AppleAndOrange = Extract<Fruit, "apple" | "orange">;

