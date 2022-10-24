import PropTypes from 'prop-types'
import { Form, SearchFormButton, Input } from "./Saerchbox.styled"

export const SearchBox = ({onSubmit}) => {
    return <Form  onSubmit={onSubmit}>
            <Input
                name='query'
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Please type your query "
                
            />
            <SearchFormButton type="submit"/>
            </Form>
}

SearchBox.propTypes = {
  to: PropTypes.string,
}