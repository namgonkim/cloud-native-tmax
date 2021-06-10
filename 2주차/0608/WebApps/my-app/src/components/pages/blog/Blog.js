import React from 'react';
import Title from '../../elements/ui/Title';
import BlogView from '../../elements/widgets/blog/BlogView';

export default function Blog() {
    return(
        <section id="blog">
            <div className="container">
                <Title name="OUR BLOG"/>
                <BlogView/>
            </div>
        </section>
    );
}