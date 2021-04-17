import React from 'react';
import _ from 'lodash';

export default class TestimonialsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let testimonials = _.get(section, 'testimonials', null);
        return (
      
                    <div key={testimonial_idx + '.1'} className="quotes__separator" />
                    </React.Fragment>))}
                </div>
            </section>
        );
    }
}
