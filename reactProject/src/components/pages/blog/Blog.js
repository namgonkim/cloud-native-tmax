import Title from '../../elements/ui/Title';
import Bloglist from '../../elements/widgets/bloglist/Bloglist';

export default function Blog(){
    return (
        <section id="blog">
            <div className="container">
                <Title title = "Today's Blog"/>
                <Bloglist />
            </div>
        </section> 

    );
}