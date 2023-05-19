import { Component, ReactNode } from "react";
import style from './Table.module.css';
import TableItem from "./TableItem";
import TableStatePanel from "./TableStatePanel";
import TableHeader from "./TableHeader";
import TableControlPanel from "./TableControlPanel";
import { Dictionary } from "@reduxjs/toolkit";

type ComponentProps<TI, TR> = {
    modifiedContainerStyle: string,
    itemConfig: Dictionary<string>,
    panelConfig: Dictionary<string>,
    defaultItem: TI,
    items: Array<TI>,
    createItem: (item: TR) => void,
    getItems: (skip: number, take: number) => void,
    editItem: (id: number, item: TR) => void,
    deleteItem: (id: number) => void
}

//TODO: dont extend, just select TR from TI
//TODO: replace any to string | number | ...
class Table<TI extends TR & {id: number}, TR extends Dictionary<any>> extends Component<ComponentProps<TI, TR>> {
    defaultItem = this.props.defaultItem;
    state = {
        isAddMode: false,
        isEditMode: false,
        itemToEdit: {...this.defaultItem}
    }

    componentDidMount(): void{
        this.getItems();
    }

    getItems = (): void => {
        this.props.getItems(0, 10);
    }

    addNewItem = (newItem: TR): void => {
        this.props.createItem(newItem);
        this.toggleAddMode();
    }
    
    editItem = (editedItem: TR): void => {
        const id = this.state.itemToEdit.id;
        this.props.editItem(id, editedItem);
        this.closeEditMode();
    }

    deleteItem = (id: number): void => {
        if (this.state.itemToEdit.id === id)
            this.closeEditMode();

        this.props.deleteItem(id);
    }

    openEditMode = (item: TI): void => {
        this.setState({
            isAddMode: false,
            isEditMode: true,
            itemToEdit: item
        });
    }

    closeEditMode = (): void => { 
        this.setState({ 
            isEditMode: false, 
            itemToEdit: {...this.defaultItem}
        }); 
    }

    toggleAddMode = (): void => {
        this.setState({ 
            isAddMode: !this.state.isAddMode 
        }); 
    }

    render(): ReactNode  {
        return (
            <div className={`${style.tableContainer} ${this.props.modifiedContainerStyle}`}>
                <TableHeader config={this.props.itemConfig} />
                
                { 
                    this.props.items.map(item => 
                        <TableItem<TI>
                            key={item.id}
                            config={this.props.itemConfig}
                            info={item} 
                            openEditMode={this.openEditMode} 
                            onDelete={this.deleteItem} 
                        />) 
                }
                
                { 
                    this.state.isAddMode && 
                        <TableStatePanel<TI, TR> 
                            config={this.props.panelConfig}
                            info={this.state.itemToEdit} 
                            onCancel={this.toggleAddMode} 
                            onSubmit={this.addNewItem} 
                        />
                }

                { 
                    this.state.isEditMode && 
                        <TableStatePanel<TI, TR> 
                            config={this.props.panelConfig}
                            info={this.state.itemToEdit} 
                            onCancel={this.closeEditMode} 
                            onSubmit={this.editItem} 
                        /> 
                }

                { 
                    !this.state.isAddMode && !this.state.isEditMode && 
                        <TableControlPanel 
                            onCreate={this.toggleAddMode} 
                            onRefresh={this.getItems} 
                        /> 
                }

            </div>
        );
    }
}

export default Table;