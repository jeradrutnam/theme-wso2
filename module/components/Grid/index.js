import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container as ReactstrapContainer, Row as ReactstrapRow, Col as ReactstrapCol } from 'reactstrap';

const propTypes = {
    /**
     * Useful to extend the style applied to components.
     */
    className: PropTypes.string,
    /**
     * If true, the component will have the flex container behavior. You should be wrapping items with a container.
     */
    container: PropTypes.bool,
    /**
     * @ignore
     */
    children: PropTypes.node,
    /**
     * If true, the component will have the flex item behavior. You should be wrapping items with a container.
     */
    item: PropTypes.bool,
    /**
     * Defines the justify-content style property. It is applied for all screen sizes.
     */
    justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
    /**
     * Defines the number of grids the component is going to use. It's applied for the lg breakpoint and wider screens if not overridden.
     */
    lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'col-lg-auto']),
    /**
     * Defines the number of grids the component is going to use. It's applied for the md breakpoint and wider screens if not overridden.
     */
    md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'col-md-auto']),
    /**
     * Defines the number of grids the component is going to use. It's applied for the sm breakpoint and wider screens if not overridden.
     */
    sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'col-sm-auto']),
    /**
     * Defines the number of grids the component is going to use. It's applied for the xl breakpoint and wider screens.
     */
    xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'col-xl-auto']),
    /**
     * Defines the number of grids the component is going to use. It's applied for all the screen sizes with the lowest priority.
     */
    xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'col-xs-auto']),
};

const defaultProps = {
    item: false,
    justify: 'flex-start',
};


/**
 * Grid for base layouting
 * @extends React.Component
 */
export class Grid extends React.Component {
    renderJustifyContent(param) {
        switch (param) {
            case 'flex-start':
                return 'd-flex justify-content-start';
            case 'center':
                return 'd-flex justify-content-center';
            case 'flex-end':
                return 'd-flex justify-content-end';
            case 'space-between':
                return 'd-flex justify-content-between';
            case 'space-around':
                return 'd-flex justify-content-around';
            default:
                return '';
        }
    }

    render() {
        const {
            className,
            container,
            item,
            xs,
            sm,
            md,
            lg,
            xl,
            justify,
            ...attributes
        } = this.props;

        let grid = '';

        if (item) {
            grid = (
                <ReactstrapCol
                    item={item}
                    xs={xs}
                    sm={sm}
                    md={md}
                    lg={lg}
                    xl={xl}
                    justify={this.renderJustifyContent(justify)}
                    className={classNames(className, this.renderJustifyContent(justify))}
                >
                    { this.props.children }
                </ReactstrapCol>);
        } else {
            grid = (
                <ReactstrapContainer
                    className={classNames(className)}
                    fluid={container}
                    {...attributes}
                >
                    <ReactstrapRow>
                        { this.props.children }
                    </ReactstrapRow>
                </ReactstrapContainer>);
        }

        return (
            grid
        );
    }
}

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;