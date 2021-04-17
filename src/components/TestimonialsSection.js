import React from 'react';
import _ from 'lodash';

export default class TestimonialsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let testimonials = _.get(section, 'testimonials', null);
        return (
            <section className="content__row" data-id={_.get(section, 'section_id', null)}>
                <h2 className="content__row-title">{_.get(section, 'title', null)}</h2>
                <div className="quotes">
                    {_.map(testimonials, (testimonial, testimonial_idx) => (<React.Fragment key={testimonial_idx + '.2'}>
                    <div key={testimonial_idx} className="quotes__item">
                        <svg className="quotes__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 14.182l4.571-14.182h4.952l-3.81 13.289h3.81v10.711h-9.524v-9.818zM14.476 14.182l4.571-14.182h4.952l-3.81 13.289h3.81v10.711h-9.524v-9.818z" />
                        </svg>
                        <script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
<iframe id="testimonialto-makers-rocket-dark" src="https://embed.testimonial.to/w/makers-rocket?theme=dark&card=base" frameborder="0" scrolling="no" width="100%"></iframe>
<script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, "#testimonialto-makers-rocket-dark");</script>
                    </div>
                    <div key={testimonial_idx + '.1'} className="quotes__separator" />
                    </React.Fragment>))}
                </div>
            </section>
        );
    }
}
