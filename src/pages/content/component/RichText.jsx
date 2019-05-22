import React from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import "../content-article/content-article.css"

export default class EditorDemo extends React.Component {

    render () {
		const controls = 
		[
			"font-family",'font-size','bold', 'italic', 'underline', 'text-color', 
			
			'separator', 'link', 'separator', 'media' ,'text-align','clear','undo'
		]
        return (
            <div className="my-component" >
                <BraftEditor
					controls={controls}
                   
                    placeholder="请输入文章内容"
                />
            </div>
        )

    }

}