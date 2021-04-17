import React from 'react';
import _ from 'lodash';

export default class TestimonialsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let testimonials = _.get(section, 'testimonials', null);
        return (
           <section>
               <script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
<iframe id="testimonialto-makers-rocket-dark" src="https://embed.testimonial.to/w/makers-rocket?theme=dark&card=base" frameborder="0" scrolling="no" width="100%"></iframe>
<script type="text/javascript">"#testimonialto-makers-rocket-dark");</script>
            </section>
        );
    }
}
