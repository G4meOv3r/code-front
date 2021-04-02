import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import Frame from '../frame/Frame'
import Award from '../profile/Award'
import '../../../styles/atoms/input/awards.css'

class AwardsInput extends React.Component {
    render () {
        const { name, awards, selectedAwards, className, ...otherProps } = this.props
        return (
            <Frame title={'Награды'} className={classNames('input-award-wrapper', className)}>
                {
                    awards.map((award, index) => {
                        const checked = selectedAwards.includes(index)
                        return (
                            <label key={award._id}>
                                <input name={name} type={'checkbox'} className={'input-award-input'} defaultValue={index} defaultChecked={checked} />
                                <Award
                                    _id={award._id}
                                    reason={award.reason}
                                    className={'input-award'}
                                    {...otherProps}
                                />
                            </label>
                        )
                    })
                }
            </Frame>
        )
    }
}
AwardsInput.propTypes = {
    name: PropTypes.string,
    awards: PropTypes.array,
    selectedAwards: PropTypes.array,
    className: PropTypes.string
}
export default AwardsInput
