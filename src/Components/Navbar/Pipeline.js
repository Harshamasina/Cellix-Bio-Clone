import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';


function Pipeline(){
    document.title = 'Pipeline - Cellix Bio';
    return(
        <>
        <div className='patentlandingpage'>
              <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Abstract+.mp4" autoPlay muted loop className='patents_video_bg' type="video/mp4"/>
            <div className='pipeline-text'>
                            <div className='patents_text_1'>
                                <h1 className='pipelineCarouselh1'>PIPELINE</h1>
                            </div>
                            </div>
              </div>
            <div className='PLContainer'>
               {/* <div className='PLContainerh3'>
                    <div className='DescContainerh3'><span></span>
                        <span className="WWDh3">PIPELINE</span><span></span>
                    </div>
                </div> */}
                <div className="PLpContainerp">
                  <p className="PLp"><span>Cellix Bio</span> research & drug programmes focus on the understanding of the underlying mechanisms of diseases. Our proprietary technology platform currently focusses to improve success rates, minimise drug discovery costs and speed up development timelines by converging on targets that have been independently validated in diseases.</p>
                </div>
            </div>

            <Accordion defaultActiveKey="0">
                <AccordionItem eventKey="0">
                    <Accordion.Header><h4>DERMATOLOGY</h4></Accordion.Header>
                        <AccordionBody className='IPAB'>
                            <Table striped bordered hover responsive className='mt-3 shadow-sm'>
                                <thead>
                                    <tr>
                                        <th className='IPPatentTableHead'>TARGET ID</th>
                                        <th className='IPPatentTableHead'>DISEASE FOCUS</th>
                                        <th className='IPPatentTableHead'>BIOLOGY</th>
                                        <th className='IPPatentTableHead'>CLASS</th>
                                        <th className='IPPatentTableHead'>DOSAGE</th>
                                        {/* <th className='IPPatentTableHead'>STATUS</th>
                                        <th className='IPPatentTableHead'>TIMELINES</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A140</td>
                                        <td className='PPDiseaseFocus'>Atopic Dermatitis</td>
                                        <td className='PPTableData'>H1-receptor antagonist</td>
                                        <td className='PPTableData'>Antihistamines</td>
                                        <td>Lotion</td>
                                        {/* <td>Phase IIa</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A0131</td>
                                        <td className='PPDiseaseFocus'>Seborrheic Dermatitis, Psoriasis</td>
                                        <td className='PPTableData'>H1 and Immuno-modulatory</td>
                                        <td className='PPTableData'>Antihistamines and Corticosteroid</td>
                                        <td>Lotion</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A836</td>
                                        <td className='PPDiseaseFocus'>Pruritus</td>
                                        <td className='PPTableData'>Inverse agonist H1 and H1 antagonist</td>
                                        <td className='PPTableData'>Dual-Antihistamine</td>
                                        <td>Cream</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-AC140</td>
                                        <td className='PPDiseaseFocus'>Peripheral Neuropathy</td>
                                        <td className='PPTableData'>C-, Aβ- and Aδ-type peripheral nerve fiber</td>
                                        <td className='PPTableData'>Tricyclic antidepressant</td>
                                        <td>Cream</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A134</td>
                                        <td className='PPDiseaseFocus'>Postherpetic Neuralgia</td>
                                        <td className='PPTableData'>C-, Aβ- and Aδ-type and COX inhibitor</td>
                                        <td className='PPTableData'>Tricyclic antidepressant and NSAID</td>
                                        <td>Lotion</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A1021</td>
                                        <td className='PPDiseaseFocus'>Urticaria</td>
                                        <td className='PPTableData'>Inverse agonist H1</td>
                                        <td className='PPTableData'>Antihistamines</td>
                                        <td>Cream</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                </tbody>
                            </Table>
                        </AccordionBody>
                </AccordionItem>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <AccordionItem eventKey="0">
                    <Accordion.Header><h4>NEUROLOGY</h4></Accordion.Header>
                        <AccordionBody className='IPAB'>
                            <Table striped bordered hover responsive className='mt-3 shadow-sm'>
                                <thead>
                                    <tr>
                                        <th className='IPPatentTableHead'>TARGET ID</th>
                                        <th className='IPPatentTableHead'>DISEASE FOCUS</th>
                                        <th className='IPPatentTableHead'>BIOLOGY</th>
                                        <th className='IPPatentTableHead'>CLASS</th>
                                        <th className='IPPatentTableHead'>DOSAGE</th>
                                        {/* <th className='IPPatentTableHead'>STATUS</th>
                                        <th className='IPPatentTableHead'>TIMELINES</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='PPTargetId'>CLX-106</td>
                                        <td className='PPDiseaseFocus'>Multiple Sclerosis</td>
                                        <td className='PPTableData'>Nrf2</td>
                                        <td className='PPTableData'>KEAP1 inhibitors</td>
                                        <td>Capsule</td>
                                        {/* <td>IND Enabling </td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A107</td>
                                        <td className='PPDiseaseFocus'>Seizures, Neuropathic Pain</td>
                                        <td className='PPTableData'>GABA</td>
                                        <td className='PPTableData'>Blocks the VGCC</td>
                                        <td>Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A144</td>
                                        <td className='PPDiseaseFocus'>Multiple Sclerosis</td>
                                        <td className='PPTableData'>Nrf2</td>
                                        <td className='PPTableData'>KEAP1 inhibitors</td>
                                        <td>Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A542</td>
                                        <td className='PPDiseaseFocus'>Parkinson's Disease</td>
                                        <td className='PPTableData'>DOPA</td>
                                        <td className='PPTableData'>Dopamine receptor</td>
                                        <td>Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A120</td>
                                        <td className='PPDiseaseFocus'>Major Depressive Disorder</td>
                                        <td className='PPTableData'>NDRI</td>
                                        <td className='PPTableData'>Anti-Depressants</td>
                                        <td>Lozenge</td>
                                        {/* <td>Pre-Clinical</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A102</td>
                                        <td className='PPDiseaseFocus'>Schizophrenia,Bipolar Disorder</td>
                                        <td className='PPTableData'>D2 and 5HT2</td>
                                        <td className='PPTableData'>Antipsychotic</td>
                                        <td>Suspension</td>
                                        {/* <td>Pre-Clinical</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A133</td>
                                        <td className='PPDiseaseFocus'>ALS & Stroke</td>
                                        <td className='PPTableData'>Free radical scavenger</td>
                                        <td className='PPTableData'>Cytoprotective</td>
                                        <td>Suspension</td>
                                        {/* <td>Pre-Clinical</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A131</td>
                                        <td className='PPDiseaseFocus'>Mania & Depressive Episodes</td>
                                        <td className='PPTableData'>D2 and 5HT2</td>
                                        <td className='PPTableData'>antipsychotic</td>
                                        <td>Nasal Spray</td>
                                        {/* <td>Pre-Clinical</td>
                                        <td>2024</td> */}
                                    </tr>
                                </tbody>
                            </Table>
                        </AccordionBody>
                </AccordionItem>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <AccordionItem eventKey="0">
                    <Accordion.Header><h4>PAIN & INFLAMMATION</h4></Accordion.Header>
                        <AccordionBody className='IPAB'>
                            <Table striped bordered hover responsive className='mt-3 shadow-sm'>
                                <thead>
                                    <tr>
                                        <th className='IPPatentTableHead'>TARGET ID</th>
                                        <th className='IPPatentTableHead'>DISEASE FOCUS</th>
                                        <th className='IPPatentTableHead'>BIOLOGY</th>
                                        <th className='IPPatentTableHead'>CLASS</th>
                                        <th className='IPPatentTableHead'>DOSAGE</th>
                                        {/* <th className='IPPatentTableHead'>STATUS</th>
                                        <th className='IPPatentTableHead'>TIMELINES</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A142</td>
                                        <td className='PPDiseaseFocus'>Arthritis and Spondylitis</td>
                                        <td className='PPTableData'>COX Inhibitor</td>
                                        <td className='PPTableData'>NSAID</td>
                                        <td>Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A133</td>
                                        <td className='PPDiseaseFocus'>Osteoarthritis Pain</td>
                                        <td className='PPTableData'>COX Inhibitor</td>
                                        <td className='PPTableData'>NSAID</td>
                                        <td>Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-C102</td>
                                        <td className='PPDiseaseFocus'>Fibromyalgia</td>
                                        <td className='PPTableData'>5-HT2 receptor antagonist</td>
                                        <td className='PPTableData'>Skeletal muscle relaxants</td>
                                        <td>Lozenge</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A103</td>
                                        <td className='PPDiseaseFocus'>Spinal Cord Injury Pain</td>
                                        <td className='PPTableData'>5-HT2 and GABA</td>
                                        <td className='PPTableData'>Skeletal muscle relaxants</td>
                                        <td>Lozenge</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-N104</td>
                                        <td className='PPDiseaseFocus'>Insomnia - Pain mediated</td>
                                        <td className='PPTableData'>5-HT2 and M receptor type 1A</td>
                                        <td className='PPTableData'>Muscle Relaxant and Hormone</td>
                                        <td>Nasal Spray</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                </tbody>
                            </Table>
                        </AccordionBody>
                </AccordionItem>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <AccordionItem eventKey="0">
                    <Accordion.Header><h4>METABOLIC & CARDIOVASCULAR DISEASES</h4></Accordion.Header>
                        <AccordionBody className='IPAB'>
                            <Table striped bordered hover responsive className='mt-3 shadow-sm'>
                                <thead>
                                    <tr>
                                        <th className='IPPatentTableHead'>TARGET ID</th>
                                        <th className='IPPatentTableHead'>DISEASE FOCUS</th>
                                        <th className='IPPatentTableHead'>BIOLOGY</th>
                                        <th className='IPPatentTableHead'>CLASS</th>
                                        <th className='IPPatentTableHead'>DOSAGE</th>
                                        {/* <th className='IPPatentTableHead'>STATUS</th>
                                        <th className='IPPatentTableHead'>TIMELINES</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A26102</td>
                                        <td className='PPDiseaseFocus'>Type 2 Diabetes</td>
                                        <td className='PPTableData'>AMPK</td>
                                        <td className='PPTableData'>Biguanides</td>
                                        <td>Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A13101</td>
                                        <td className='PPDiseaseFocus'>Type 2 Diabetes and CV Risk Management</td>
                                        <td className='PPTableData'>AMPK and SGLT2</td>
                                        <td className='PPTableData'>Biguanide and Gliflozins</td>
                                        <td>Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A44102</td>
                                        <td className='PPDiseaseFocus'>Type 2 Diabetes</td>
                                        <td className='PPTableData'>AMPK and DPP 4</td>
                                        <td className='PPTableData'>Biguanide and Gliptins</td>
                                        <td>Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A4C102</td>
                                        <td className='PPDiseaseFocus'>MI & CAD</td>
                                        <td className='PPTableData'>COX-1</td>
                                        <td className='PPTableData'>Salicylates</td>
                                        <td>Tablet</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2023</td> */}
                                    </tr>
                                </tbody>
                            </Table>
                        </AccordionBody>
                </AccordionItem>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <AccordionItem eventKey="0">
                    <Accordion.Header><h4>RESPIRATORY DISEASES</h4></Accordion.Header>
                        <AccordionBody className='IPAB'>
                            <Table striped bordered hover responsive className='mt-3 shadow-sm'>
                                <thead>
                                    <tr>
                                        <th className='IPPatentTableHead'>TARGET ID</th>
                                        <th className='IPPatentTableHead'>DISEASE FOCUS</th>
                                        <th className='IPPatentTableHead'>BIOLOGY</th>
                                        <th className='IPPatentTableHead'>CLASS</th>
                                        <th className='IPPatentTableHead'>DOSAGE</th>
                                        {/* <th className='IPPatentTableHead'>STATUS</th>
                                        <th className='IPPatentTableHead'>TIMELINES</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A38C102</td>
                                        <td className='PPDiseaseFocus'>Allergic Rhinitis</td>
                                        <td className='PPTableData'>Selective H1 - receptor antagonist</td>
                                        <td className='PPTableData'>Antihistamines</td>
                                        <td>Nasal Spray</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A38C102</td>
                                        <td className='PPDiseaseFocus'>Vasomotor Rhinitis</td>
                                        <td className='PPTableData'>Serotonin and Histamine antagonist</td>
                                        <td className='PPTableData'>Anticholinergic and Sedative Effects</td>
                                        <td>Oral Solution</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A731</td>
                                        <td className='PPDiseaseFocus'>Perennial Nonallergic Rhinitis</td>
                                        <td className='PPTableData'>Selective H1 - receptor & GR</td>
                                        <td className='PPTableData'>Antihistamines & Corticosteroid</td>
                                        <td>Nasal Spray</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-AP131</td>
                                        <td className='PPDiseaseFocus'>Nasal Polyps, Congestion</td>
                                        <td className='PPTableData'>Selective H1 - receptor & GR</td>
                                        <td className='PPTableData'>Antihistamines & Corticosteroid</td>
                                        <td>Nasal Spray</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A38103</td>
                                        <td className='PPDiseaseFocus'>Angioedema</td>
                                        <td className='PPTableData'>Selective H1 - receptor antagonist</td>
                                        <td className='PPTableData'>Antihistamines</td>
                                        <td>Nasal Spray</td>
                                        {/* <td>pre-IND</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A39102</td>
                                        <td className='PPDiseaseFocus'>Seasonal and Perennial Allergic Rhinitis</td>
                                        <td className='PPTableData'>Second Generation Antihistamine</td>
                                        <td className='PPTableData'>Antihistamines</td>
                                        <td>Nasal Spray</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2023</td> */}
                                    </tr>
                                </tbody>
                            </Table>
                        </AccordionBody>
                </AccordionItem>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <AccordionItem eventKey="0">
                    <Accordion.Header><h4>GASTROINTESTINAL</h4></Accordion.Header>
                        <AccordionBody className='IPAB'>
                            <Table striped bordered hover responsive className='mt-3 shadow-sm'>
                                <thead>
                                    <tr>
                                        <th className='IPPatentTableHead'>TARGET ID</th>
                                        <th className='IPPatentTableHead'>DISEASE FOCUS</th>
                                        <th className='IPPatentTableHead'>BIOLOGY</th>
                                        <th className='IPPatentTableHead'>CLASS</th>
                                        <th className='IPPatentTableHead'>DOSAGE</th>
                                        {/* <th className='IPPatentTableHead'>STATUS</th>
                                        <th className='IPPatentTableHead'>TIMELINES</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='PPTargetId'>CLX-103</td>
                                        <td className='PPDiseaseFocus'>Ulcerative Colitis</td>
                                        <td className='PPTableData'>COX and PG</td>
                                        <td className='PPTableData'>Anti-Inflammatory</td>
                                        <td>Capsule</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-AC141412</td>
                                        <td className='PPDiseaseFocus'>Proctitis in Adults</td>
                                        <td className='PPTableData'>COX and PG</td>
                                        <td className='PPTableData'>Anti-Inflammatory</td>
                                        <td>Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-ACALT</td>
                                        <td className='PPDiseaseFocus'>Inflammatory Bowel Syndrome</td>
                                        <td className='PPTableData'>5-HT3 + H1 receptor</td>
                                        <td className='PPTableData'>Serotonin Receptor + Antihistamines</td>
                                        <td>Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-AC46102</td>
                                        <td className='PPDiseaseFocus'>Gastroparesis</td>
                                        <td className='PPTableData'>ACH and D2 receptors</td>
                                        <td className='PPTableData'>Acetylcholine and dopamine receptor antagonist</td>
                                        <td>Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-AC2620</td>
                                        <td className='PPDiseaseFocus'>Eosinophilic Esophagitis</td>
                                        <td className='PPTableData'>Nerve Block</td>
                                        <td className='PPTableData'>Local Anesthetics and Immunosuppressant</td>
                                        <td>Lozenge</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-AC45102</td>
                                        <td className='PPDiseaseFocus'>Post-operative Anti-Emetic</td>
                                        <td className='PPTableData'> D2 and D3 antagonist</td>
                                        <td className='PPTableData'>Anti-Emetics</td>
                                        <td>Lozenge & Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                </tbody>
                            </Table>
                        </AccordionBody>
                </AccordionItem>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <AccordionItem eventKey="0">
                    <Accordion.Header><h4>ONCOLOGY & SPECIALITY</h4></Accordion.Header>
                        <AccordionBody className='IPAB'>
                            <Table striped bordered hover responsive className='mt-3 shadow-sm'>
                                <thead>
                                    <tr>
                                        <th className='IPPatentTableHead'>TARGET ID</th>
                                        <th className='IPPatentTableHead'>DISEASE FOCUS</th>
                                        <th className='IPPatentTableHead'>BIOLOGY</th>
                                        <th className='IPPatentTableHead'>CLASS</th>
                                        <th className='IPPatentTableHead'>DOSAGE</th>
                                        {/* <th className='IPPatentTableHead'>STATUS</th>
                                        <th className='IPPatentTableHead'>TIMELINES</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='PPTargetId'>CLX-155</td>
                                        <td className='PPDiseaseFocus'>Solid Tumors</td>
                                        <td className='PPTableData'>RNA synthesis inhibition </td>
                                        <td className='PPTableData'>Antineoplastics</td>
                                        <td>Tablet</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-155A</td>
                                        <td className='PPDiseaseFocus'>Breast Cancer</td>
                                        <td className='PPTableData'>RNA synthesis and HDAC inhibitor</td>
                                        <td className='PPTableData'>Antineoplastics</td>
                                        <td>Tablet</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='IPPatentTableHead' colSpan={7}>SPECIALITY</td>
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-ACP343</td>
                                        <td className='PPDiseaseFocus'>Oral Mucositis Pain and Insomnia </td>
                                        <td className='PPTableData'>Nerve Receptor</td>
                                        <td className='PPTableData'>Local Anesthetics</td>
                                        <td>Lozenge</td>
                                        {/* <td>pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-G161C11</td>
                                        <td className='PPDiseaseFocus'>Oral Cancer Severe Pain</td>
                                        <td className='PPTableData'>Nerve Block</td>
                                        <td className='PPTableData'>Local Anesthetics</td>
                                        <td>Lozenge</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2024</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-156</td>
                                        <td className='PPDiseaseFocus'>Xerostomia and Sjogren's Syndrome</td>
                                        <td className='PPTableData'>Cholinergic agonists</td>
                                        <td className='PPTableData'>Muscarinic agent</td>
                                        <td>Buccal Tablet</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-APORA</td>
                                        <td className='PPDiseaseFocus'>Oral Mucositis Pain</td>
                                        <td className='PPTableData'>Nerve Receptor</td>
                                        <td className='PPTableData'>Local Anesthetics</td>
                                        <td>Oral Rinse</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2023</td> */}
                                    </tr>
                                </tbody>
                            </Table>
                        </AccordionBody>
                </AccordionItem>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <AccordionItem eventKey="0">
                    <Accordion.Header><h4>OPHTHALMOLOGY</h4></Accordion.Header>
                        <AccordionBody className='IPAB'>
                            <Table striped bordered hover responsive className='mt-3 shadow-sm'>
                                <thead>
                                    <tr>
                                        <th className='IPPatentTableHead'>TARGET ID</th>
                                        <th className='IPPatentTableHead'>DISEASE FOCUS</th>
                                        <th className='IPPatentTableHead'>BIOLOGY</th>
                                        <th className='IPPatentTableHead'>CLASS</th>
                                        <th className='IPPatentTableHead'>DOSAGE</th>
                                        {/* <th className='IPPatentTableHead'>STATUS</th>
                                        <th className='IPPatentTableHead'>TIMELINES</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='PPTargetId'>CLX-1621</td>
                                        <td className='PPDiseaseFocus'>Presbyopia and Glaucoma</td>
                                        <td className='PPTableData'>Muscarinic agent</td>
                                        <td className='PPTableData'>Cholinergic agent</td>
                                        <td>Solution</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-1622</td>
                                        <td className='PPDiseaseFocus'>Ocular Redness</td>
                                        <td className='PPTableData'>Alpha Adrenergic Agonist</td>
                                        <td className='PPTableData'>Ocular Hypotensive</td>
                                        <td>Solution</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-1623</td>
                                        <td className='PPDiseaseFocus'>Myopia</td>
                                        <td className='PPTableData'>Muscarinic Antagonist</td>
                                        <td className='PPTableData'>Cholinergic agent</td>
                                        <td>Solution</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-1624</td>
                                        <td className='PPDiseaseFocus'>Ptosis</td>
                                        <td className='PPTableData'>Alpha-adrenoceptor agonist</td>
                                        <td className='PPTableData'>Adrenoreceptors in Mueller's muscle</td>
                                        <td>Solution</td>
                                        {/* <td>IND Enabling</td>
                                        <td>2023</td> */}
                                    </tr>
                                    <tr>
                                        <td className='PPTargetId'>CLX-A43125</td>
                                        <td className='PPDiseaseFocus'>Non-Infectious Uveitis</td>
                                        <td className='PPTableData'>IMPDH</td>
                                        <td className='PPTableData'>Immunosuppressant</td>
                                        <td>Solution</td>
                                        {/* <td>Pre-IND</td>
                                        <td>2024</td> */}
                                    </tr>
                                </tbody>
                            </Table>
                        </AccordionBody>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default Pipeline;