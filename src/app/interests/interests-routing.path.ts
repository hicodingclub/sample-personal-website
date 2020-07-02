import { InterestsAnimalsComponent } from './interests-animals/interests-animals.component';
import { InterestsGardeningComponent } from './interests-gardening/interests-gardening.component';
import { InterestsNatureComponent } from './interests-nature/interests-nature.component';
import { InterestsComponent } from './interests.component';


export const interestsRoutingPath = [
    
    
    
    {path: '', component: InterestsComponent},
    {path: 'animals', component: InterestsAnimalsComponent},
    {path: 'gardening', component: InterestsGardeningComponent},
    {path: 'nature', component: InterestsNatureComponent},
    
];

