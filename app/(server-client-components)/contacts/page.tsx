import { ContactsChild } from '@/components/ContactsChild';
import { ContactsInfo } from '@/components/ContactsInfo';

export default function Contacts() {
    console.log('render');
    return (
        <div>
            <h2>Contacts (Server Component)</h2>
            <p>
                Static Route: Server Component - ClientComponent -
                ServerComponent
            </p>
            <p>{new Date().toLocaleString('ru')}</p>
            <br />
            <br />
            <ContactsChild>
                <ContactsInfo />
            </ContactsChild>
        </div>
    );
}
