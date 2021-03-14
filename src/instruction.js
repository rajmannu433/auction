import React from 'react';
import './App.css';

class Introduction extends React.Component{
    render(){
        return(
            
            <div className="indro">
                <h2 style={{position:'relative',top:0,marginLeft:2}}>Introduction:</h2>
                <p style={{position:'relative',top:-10,marginLeft:2}}>
                    <strong>White Cell:</strong>must be filled 
                    <br/>
                    <strong>Black Cells:</strong>blocked for responding based on your earlier selection
                    <br/>
                    <strong>No Bid Reminder:</strong>When supplier does not bid in English Auction, check with supplier that no technical issues or if need bidding instruction.
                    <br/>
                    <strong>Ariba Training:</strong> When one of the Supplier has never use SAP Ariba before, please choose YES, we will provide needed bidding instruction. 
                    <br/>
                    <strong>Length of duration for following lots after first lot:</strong>In Serial or Satggered time rule, fill in specific length of duration when the duration of the first lot  is different from the following lots, otherwise input "NO"
                    <br/>
                    <strong>Traffic Light:</strong><br/>If you select 'Yes' to enable traffic light please  (1)  Fill in green light price and yellow light price 
                        (2) confirm whether to enable to rank together with traffic light.
            </p>

            <h2 style={{position:'relative',top:0,marginLeft:2}}>指导说明：</h2>
                <p style={{position:'relative',top:-10,marginLeft:2}}>
                    <strong>白色单元格</strong>必须填写
                    <br/>
                    <strong>黑色单元格:</strong>根据先前的选择，无需填写
                    <br/>
                    <strong>不投标提醒 :</strong>如果英式投标过程中，供应商没有一次投标，需要和供应商确认投标中是否有问题
                    <br/>
                    <strong>Ariba 培训:</strong> 如果供应商从来没有用过SAP Ariba系统请选择Yes，需要为供应商提供特别培训
 
                    <br/>
                    <strong>第一批次之后，后面每一批次的竞标时长:</strong>如果为【Serial一个一个来】或【Satggered 同时开始不同时结束】的竞标模式， 第一个批次与后续批次的时长不同则另行填写具体的时长，否则填【NO】

                    <br/>
                    <strong>交通灯：</strong><br/>如果你选择“Yes”使用交通灯（1）请填写绿灯价格和黄灯价格（2）是否同时使用排名
            </p>
            
            </div>
    
        );
    }
} 

export default Introduction;