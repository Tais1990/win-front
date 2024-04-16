



export default function Form({  }) {
    const dispatch = useDispatch();
    let { closeModal } = useModalContext()
    let formProps;
    let collectiveProps;
    const [header, setHeader] = useState(null);

    useEffect(() => {
        if (typeof block.headers != 'undefined' && headers !== null && block.context.collectionType === CollectionType.Table) {
            let h = headers.filter(x => x.id === block.headers)[0].value.filter(x => x.name === 'collection')[0].headers 
            const defaultValue = {
                align: 'left',
                template: '{f:value}',
                width: '1fr'
            }
            h = h.map(x => ({...x, ...defaultValue}))
            setHeader(h)
        }
    }, [block, headers]);
    return (
        <div className={withoutWrap ? '' : `block-wrap ${even ? 'even' : 'uneven'} ${block.context.color || ''}`}>
        <div className={block.context.collective ? '' : `block block_${block.code}` } id={block.code.replace(' ', '-')}>            
            { block.context.pretitle && <h2 className="block__pretitle" dangerouslySetInnerHTML={{__html: block.context.pretitle}}></h2>}
            { block.context.title &&<h1 className="block__title" dangerouslySetInnerHTML={{__html: block.context.title}}></h1>}
            { block.context.subtitle && <h2 className="block__subtitle">{block.context.subtitle}</h2>}
            { block.context.src && <img className="block__img" src={block.context.src}></img>}
            { block.context.text && <div className="block__text" dangerouslySetInnerHTML={{__html: block.context.text}}></div>}
            
            {block.context.collection && [CollectionType.Gallery, CollectionType.Maket].includes(block.context.collectionType)  && 
                <Collection
                    openInPage={(href, isSelf = false) => {
                        if (typeof window !== "undefined" && href) {
                            window.open(`${href}`, isSelf ? '_self' : '_blank')
                            return;
                        }
                    }}
                    items={fillItems(block.context.collection, formsBlocks, dispatch, closeModal)}                    
                    type={block.context.collectionType}
                    hoverTransition = {block.context.hoverTransition}
                    contentType={block.context.collectionContentType && block.context.collectionContentType === 'overlapping' ? CollectionContentType.Overlapping : null}
                />
            }
            
            {block.context.type === 'map' && <GoogleMap coordinates={block.context.coordinates}/>}
            
            {block.context.collection && block.context.collectionType === CollectionType.Navmenu && 
                <NavMenu
                    component = {(props) => {return (<>{props.href && <Link href={props.href}>{props.children}</Link>}</>)}}
                    items = {block.context.collection.map((item) => {
                        let result = {href: "#", children: "link"};
                        result.children = item.src ? <img className='logo' src={item.src} style={{"width": "120px"}} alt={item.title}/>: (item.title || 'test')
                        result.href = item.href || '#'
                        if (item.collection) {
                            result.collection = item.collection.map(x => {return{href: x.href, children: x.title}});
                            delete result.href
                        }
                        return result;
                    })}
                />}
            
            {/* Слайдер */}
            {block.context.collection && block.context.collectionType === CollectionType.Slider && 
                <Slider
                    items={fillItems(block.context.collection, formsBlocks, dispatch, closeModal, block.code)}
                    openInPage={(href, isSelf = false) => {
                        if (typeof window !== "undefined" && href) {
                            window.open(`${href}`, isSelf ? '_self' : '_blank')
                            return;
                        }
                    }}
                    // Переделать как-то с тем, что параметры для коллекцй могут быть более сложными,
                    //  придумать, ка реальзовать это в админке
                    onlyElement={block.context.onlyElement}
            />
            }
            {/* форма */}
            {block.context.form && (formProps = formsBlocks.filter(y => y.code === block.context.form)[0]?.context) && <Form
                submitButtonName = {formProps.sendTitle}
                submit={async (values) => {
                    let result = await dispatch(sendForm({code: block.context.form, form: values}))
                    if (!result.error) {
                        alert('Запрос был успешно отправлен');
                        closeModal();
                        return null;
                    } else {
                        return {error: result.payload}
                    }  
                }}
                fields={formProps.fields}
                text={formProps.text}       
            ></Form>}
            {/* колхозный блок */}
            {block.context.collective && (collectiveProps = collectiveBlocks.filter(y => y.code === block.context.collective)[0]) &&
                <Block block={collectiveProps} collectiveBlocks={collectiveBlocks} formsBlocks={formsBlocks} withoutWrap = {true}></Block>
            }
            {/* кпопка */}
            {block.context.button && <Link href={block.context.button.href} className='block__button-link'>{block.context.button.name}</Link>}
            {/* виджет тайм пада */}
            {/* TODO понять, как разделить виджеты */}
            {(block.context.widjet && block.context.widjet.type === 'timepad' ) &&
                <TimePad customized={block.context.widjet.customized}/>
            }
            {/* Таблица */}
            {block.context.collection && block.context.collectionType === CollectionType.Table && header != null &&
                <Table
                    data={block.context.collection}
                    headers={header || []}
                >
                </Table>
            }
        </div>
        </div>
    )
}