import React from 'react'
import PropTypes from 'prop-types'
import { isContest, validateContest } from '../../../utils/validators/contest'
import Input from '../../atoms/input/Input'

class Submit extends React.Component {
    render () {
        const { errors, changed } = this.props
        return (
            <Input
                type={'submit'}
                value={'Создать'}
                disabled={this.disabled()}
                disabledCard={{ visible: this.disabled(), content: this.content(), direction: 'bottom' }}
                errorCard={{ visible: !changed && errors, content: () => { return errors.message }, direction: 'bottom' }}
                style={{ width: '120px', height: '36px' }}
            />
        )
    }

    disabled () {
        const { name, duration, tasksCount } = this.props
        return !isContest(name, duration, tasksCount)
    }

    content () {
        const { name, duration, tasksCount } = this.props
        return validateContest(name, duration, tasksCount)
    }
}
Submit.propTypes = {
    name: PropTypes.string,
    duration: PropTypes.string,
    tasksCount: PropTypes.string,
    errors: PropTypes.any,
    changed: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
}
export default Submit
