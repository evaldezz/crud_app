export type IdProps = { id: string | undefined };

export type OnSubmitProps = { onSubmit: () => void };

export type FormProps = IdProps & OnSubmitProps;
