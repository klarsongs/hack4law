import { Button } from 'components/Button';
import { Input } from 'components/Input';
import {
  ChatInput,
  ChatMe,
  ChatMeContainer,
  ChatThem,
  ChatWindow,
} from './styled';
import { useReportsService } from 'api/reports/service';
import { useState } from 'react';
import { Typography } from 'antd';
import { Alert } from 'components/Alert';
import { useRef } from 'react';

export const ComunicationView = ({
  id,
  comments,
}: {
  id: string;
  comments: any[];
}) => {
  const { useSendMessage } = useReportsService();
  const { mutate: send } = useSendMessage();
  const [message, setMessage] = useState('');

  const ref = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

  return (
    <>
      <ChatWindow>
        {comments.length === 0 && <Alert message='Brak wiadomości' />}
        {comments.map((comment) => {
          if (comment.user.role !== 'guest') {
            return (
              <div style={{ marginBottom: 8 }}>
                <Typography.Text style={{ fontSize: 14, fontWeight: 500 }}>
                  Rozpatrujący zgłoszenie
                </Typography.Text>
                <ChatMe style={{ marginTop: 6 }}>{comment.body}</ChatMe>
              </div>
            );
          }
          return (
            <ChatMeContainer>
              <ChatThem>{comment.body}</ChatThem>
            </ChatMeContainer>
          );
        })}
        <div ref={ref} />
      </ChatWindow>
      <ChatInput style={{ marginTop: 24 }}>
        <Input
          placeholder='Tutaj wpisz swoją wiadomość'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type='primary'
          style={{ marginLeft: 16 }}
          onClick={async () => {
            send({ id, body: message });
            setMessage('');
            scrollToBottom();
          }}
        >
          Wyślij
        </Button>
      </ChatInput>
    </>
  );
};
