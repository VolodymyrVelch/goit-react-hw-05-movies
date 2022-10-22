import {Form, SearchFormButton, Input } from "./Saerchbox.styled"

export const SearchBox = ({value, onSubmit}) => {
    return <Form>
        <Input
              value={value}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Please type your query "
            />
              <SearchFormButton type="submit">
                <span></span>
              </SearchFormButton >
            </Form>
}