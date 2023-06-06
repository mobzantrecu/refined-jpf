import { ShowFieldsType } from '@bewise/jpf-decorators';

// TODO: refactor names. Explain what this is doing, find if it's optimizable.
export const ShowAllFields = (props: { fields: ShowFieldsType }) => {
    return (
        <>
            {Object.entries(props.fields).map(([fieldName, field], index) =>
                field.render()
            )}
        </>
    );
};
